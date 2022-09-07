import Axios from 'axios';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import GeneralForm from '../../components/generalForm/GeneralForm';
import insertValidations from '../../helpers/insertValidations.js';
import { clearStore } from '../../redux/reducers/lostCommunicationSlice';

export default function InsertPage() {
  const [loading, setLoading] = useState(false);

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
        method: 'post',
        url: 'http://softfocus-lc-api.herokuapp.com/lost/',
        headers: { 'Content-Type': 'application/json' },
        data: dataJson,
      });
      setLoading(false);
      dispatch(clearStore());
      alert(data.message);
    } catch (e) {
      alert(e.response.data.detail);
      setLoading(false);
    }
  };

  const handleInsert = async () => {
    const verifyingInsert = insertValidations(payload);
    if (verifyingInsert.message) {
      alert(verifyingInsert.message);
    }
    if (verifyingInsert.message === undefined) {
      const dataJson = JSON.stringify(payload);
      await request(dataJson);
    }
  };

  return (
    <Container>
      <h2>Insira uma nova perda no formulário abaixo</h2>
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
        <Button onClick={() => handleInsert()}>Finalizar</Button>
      )}
    </Container>
  );
}
