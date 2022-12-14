import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cpfValidation from '../../helpers/cpfValidation.js';
import {
  changeCpf,
  changeData,
  changeEmail,
  changeEvento,
  changeLatitude,
  changeLavoura,
  changeLongitude,
  changeName,
  clearStore,
} from '../../redux/reducers/lostCommunicationSlice.js';
import ShowLostComponent from '../../components/showLostComponent/ShowLostComponent.jsx';
import './style.scss';

export default function SearchComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cpf, setCpf] = useState('');
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const { CPF } = useSelector((state) => state.lost);

  const handleSearch = async () => {
    const cpfIsValid = cpfValidation(cpf);
    if (!cpfIsValid) {
      alert('CPF inválido');
    }
    if (cpfIsValid) {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await Axios.get(
          `https://softfocus-lc-api.herokuapp.com/lost/${cpf}`
        );
        dispatch(changeData(data[0].data_colheita));
        dispatch(changeEmail(data[0].email));
        dispatch(changeEvento(data[0].evento));
        dispatch(changeLatitude(data[0].latitude));
        dispatch(changeLavoura(data[0].lavoura));
        dispatch(changeLongitude(data[0].longitude));
        dispatch(changeName(data[0].nome));
        dispatch(changeCpf(String(data[0].CPF).padStart(11, '0')));
        setSearchCompleted(true);
        setLoading(false);
      } catch (e) {
        alert(e.response.data.detail);
        setLoading(false);
      }
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await Axios.delete(
        `https://softfocus-lc-api.herokuapp.com/lost/${cpf}`
      );
      alert(response.data.message);
      dispatch(clearStore());
      setDeleteMode(false);
      setSearchCompleted(false);
      setCpf('');
      setLoading(false);
      navigate('/');
    } catch (e) {
      alert(e.response.data.detail);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch(clearStore());
    setCpf('');
    setSearchCompleted(false);
    navigate('/search');
  };

  return (
    <Container className="search-page-container">
      {searchCompleted || CPF ? (
        <>
          <ShowLostComponent />
          {deleteMode ? (
            <>
              <Alert key="warning" variant="warning">
                Atenção: Não haverá a possibilidade de recuperação dos dados
                deletados!
              </Alert>
              {loading ? (
                <div className="buttons-container">
                  <Button variant="danger" disabled>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                </div>
              ) : (
                <div className="buttons-container">
                  <Button variant="danger" onClick={() => handleDelete()}>
                    Prosseguir
                  </Button>
                  <Button onClick={() => setDeleteMode(false)}>Voltar</Button>
                </div>
              )}
            </>
          ) : (
            <div className="buttons-container">
              <Button variant="success" onClick={() => navigate('/update')}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => setDeleteMode(true)}>
                Deletar
              </Button>
              <Button onClick={() => handleCancel()}>Voltar</Button>
            </div>
          )}
        </>
      ) : (
        <>
          <Form>
            <Form.Group className="mb-3" controlId="cpfFormGroup">
              <h4>CPF do produtor rural</h4>
              <Form.Control
                type="text"
                onChange={(e) => setCpf(e.target.value)}
                value={cpf}
                placeholder="Use apenas números"
              />
            </Form.Group>
          </Form>
          {loading ? (
            <div className="buttons-container">
              <Button variant="success" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </div>
          ) : (
            <div className="buttons-container">
              <Button variant="success" onClick={() => handleSearch()}>
                Buscar
              </Button>
              <Button onClick={() => navigate('/')}>Voltar</Button>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
