import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCpf,
  changeData,
  changeEmail,
  changeEvento,
  changeLatitude,
  changeLavoura,
  changeLongitude,
  changeName,
} from '../../redux/reducers/lostCommunicationSlice.js';

export default function GeneralForm() {
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

  return (
        <Form>
          <Form.Group className="mb-3" controlId="nameFormGroup">
            <Form.Label>Nome do produtor rural</Form.Label>
            <Form.Control
              name="nome"
              type="text"
              onChange={(e) => dispatch(changeName(e.target.value))}
              value={nome}
              placeholder="Ex: José Guilherme Oliveira"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailFormGroup">
            <Form.Label>Email do produtor rural</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => dispatch(changeEmail(e.target.value))}
              value={email}
              placeholder="Ex: jose.guilherme@exemplo.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpfFormGroup">
            <Form.Label>CPF do produtor rural</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => dispatch(changeCpf(e.target.value))}
              value={CPF}
              placeholder="Use apenas números"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="localizaçãoFormGroup">
            <Form.Label>Localização da lavoura</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => dispatch(changeLatitude(e.target.value))}
              value={latitude}
              placeholder="Latitude"
            />
            <Form.Control
              type="text"
              onChange={(e) => dispatch(changeLongitude(e.target.value))}
              value={longitude}
              placeholder="Longitude"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="typeCropFormGroup">
            <Form.Label>Tipo de lavoura</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => dispatch(changeLavoura(e.target.value))}
              value={lavoura}
              placeholder="Ex: milho"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dataFormGroup">
            <Form.Label>Data da colheita</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => dispatch(changeData(e.target.value))}
              value={data_colheita}
              placeholder="Ex: 19/09/1994"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dateFormGroup">
            <Form.Label>Evento ocorrido</Form.Label>
            <Form.Select
              aria-label="Selecione evento"
              onChange={(e) => dispatch(changeEvento(e.target.value))}
              value={evento}
            >
              <option>Selecione um evento</option>
              <option value="Chuva excessiva">Chuva excessiva</option>
              <option value="Geada">Geada</option>
              <option value="Granizo">Granizo</option>
              <option value="Seca">Seca</option>
              <option value="Vendaval">Vendaval</option>
              <option value="Raio">Raio</option>
            </Form.Select>
          </Form.Group>
        </Form>
  );
}
