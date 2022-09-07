import { Button, Spinner } from 'react-bootstrap';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import insertValidations from '../../helpers/insertValidations.js';
import GeneralForm from '../../components/generalForm/GeneralForm.jsx';
import { clearStore } from '../../redux/reducers/lostCommunicationSlice.js';

export default function UpdatePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    nome,
    email,
    CPF,
    latitude,
    longitude,
    lavoura,
    data_colheita,
    evento,
  } = useSelector((state) => state.lost);

  const payload = {
    nome,
    email,
    CPF,
    latitude,
    longitude,
    lavoura,
    data_colheita,
    evento,
  };

  const request = async (dataJson) => {
    try {
      setLoading(true);
      const { data } = await Axios({
        method: 'put',
        url: `https://softfocus-lc-api.herokuapp.com/lost/${CPF}`,
        headers: { 'Content-Type': 'application/json' },
        data: dataJson,
      });
      alert(data.message);
      setLoading(false);
      dispatch(clearStore());
      navigate('/');
    } catch (e) {
      alert(e.response.data.detail);
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    const verifyingInsert = insertValidations(payload);
    if (verifyingInsert.message) {
      alert(verifyingInsert.message);
    }
    if (verifyingInsert.message === undefined) {
      const dataJson = JSON.stringify(payload);
      await request(dataJson);
    }
  };

  const handleCancel = () => {
    // dispatch(clearStore());
    navigate('/search');
  };

  return (
    <Container>
      <GeneralForm />
      {loading ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <>
          <Button onClick={() => handleUpdate()}>Atualizar</Button>
          <Button onClick={() => handleCancel()}>Voltar</Button>
        </>
      )}
    </Container>
  );
}
