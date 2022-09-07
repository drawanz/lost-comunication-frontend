// eslint-disable-next-line import/extensions
import isCpfValid from './cpfValidation.js';

const verifyName = (name) => {
  if (name === '') {
    return { message: 'O campo mome não pode ser vazio!' };
  }
  if (name.length < 8) {
    return { message: 'O campo nome precisa ter mais de 8 caracteres.' };
  }
  return true;
};

const verifyEmail = (email) => {
  if (!email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    return { message: 'Email precisa ser válido!' };
  }
  return true;
};

const verifyCpf = (cpf) => {
  if (!isCpfValid(cpf)) {
    return { message: 'CPF inválido!' };
  }
  return true;
};

const verifyCoords = (latitude, longitude) => {
  if (latitude === '') {
    return { message: 'O campo latitude não pode ser vazio!' };
  }
  if (longitude === '') {
    return { message: 'O campo longitude não pode ser vazio!' };
  }
  if (latitude < -90 || latitude > 90) {
    return { message: 'O campo latitude precisa estar entre -90° e 90°.' };
  }
  if (longitude < -180 || longitude > 180) {
    return { message: 'O campo longitude precisa estar entre -180° e 180°.' };
  }
  return true;
};

const verifyCrop = (typeCrop) => {
  if (typeCrop === '') {
    return { message: 'O campo lavoura não pode ser vazio!' };
  }
  return true;
};

const verifyDate = (date) => {
  if (
    !date.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
  ) {
    return { message: 'O campo data precisa estar no formado dia/mês/ano.' };
  }
  return true;
};

const verifyEvent = (event) => {
  if (event === '' || event === 'Selecione um evento') {
    return { message: 'O campo evento não pode ser vazio!' };
  }
  return true;
};

const insertValidations = (payload) => {
  const verifyingName = verifyName(payload.nome);
  const verifyingEmail = verifyEmail(payload.email);
  const verifyingCpf = verifyCpf(payload.CPF);
  const verifyingCoords = verifyCoords(payload.latitude, payload.longitude);
  const verifyingCrop = verifyCrop(payload.lavoura);
  const verifyingDate = verifyDate(payload.data_colheita);
  const verifyingEvent = verifyEvent(payload.evento);

  if (verifyingName.message) return verifyingName;
  if (verifyingEmail.message) return verifyingEmail;
  if (verifyingCpf.message) return verifyingCpf;
  if (verifyingCoords.message) return verifyingCoords;
  if (verifyingCrop.message) return verifyingCrop;
  if (verifyingDate.message) return verifyingDate;
  if (verifyingEvent.message) return verifyingEvent;

  return true;
}

export default insertValidations
