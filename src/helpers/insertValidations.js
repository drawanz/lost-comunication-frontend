// eslint-disable-next-line import/extensions
import isCpfValid from './cpfValidation.js';

const verifyName = (name) => {
  if (name === '') {
    return { message: 'Nome não pode ser vazio' };
  }
  if (name.length < 8) {
    return { message: 'Nome precisa ter mais de 8 caracteres' };
  }
  return true;
};

const verifyEmail = (email) => {
  if (!email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    return { message: 'Email precisa ser válido' };
  }
  return true;
};

const verifyCpf = (cpf) => {
  if (!isCpfValid(cpf)) {
    return { message: 'CPF inválido' };
  }
  return true;
};

const verifyCoords = (latitude, longitude) => {
  if (latitude < -90 || latitude > 90) {
    return { message: 'Latitude precisa estar entre -90° e 90°' };
  }
  if (longitude < -180 || longitude > 180) {
    return { message: 'Longitude precisa estar entre -180° e 180°' };
  }
  return true;
};

const verifyCrop = (typeCrop) => {
  if (typeCrop === '') {
    return { message: 'Lavoura não pode ser vazio' };
  }
  return true;
};

const verifyDate = (date) => {
  if (
    !date.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
  ) {
    return { message: 'Data precisa estar no formado dia/mês/ano' };
  }
  return true;
};

const verifyEvent = (event) => {
  if (event === '') {
    return { message: 'Evento não pode ser vazio' };
  }
  return true;
};

const insertValidations = (payload) => {
  const verifyingName = verifyName(payload.name);
  const verifyingEmail = verifyEmail(payload.email);
  const verifyingCpf = verifyCpf(payload.cpf);
  const verifyingCoords = verifyCoords(payload.latitude, payload.longitude);
  const verifyingCrop = verifyCrop(payload.typeCrop);
  const verifyingDate = verifyDate(payload.date);
  const verifyingEvent = verifyEvent(payload.event);

  if (verifyingName.message) return verifyingName.message;
  if (verifyingEmail.message) return verifyingEmail.message;
  if (verifyingCpf.message) return verifyingCpf.message;
  if (verifyingCoords.message) return verifyingCoords.message;
  if (verifyingCrop.message) return verifyingCrop.message;
  if (verifyingDate.message) return verifyingDate.message;
  if (verifyingEvent.message) return verifyingEvent.message;

  return true;
}

export default insertValidations
