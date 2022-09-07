// eslint-disable-next-line import/extensions
import isCpfValid from './cpfValidation.js';

const monthDays = [
  { month: '01', days: '31' },
  { month: '02', days: '28' },
  { month: '03', days: '31' },
  { month: '04', days: '30' },
  { month: '05', days: '31' },
  { month: '06', days: '30' },
  { month: '07', days: '31' },
  { month: '08', days: '31' },
  { month: '09', days: '30' },
  { month: '10', days: '31' },
  { month: '11', days: '30' },
  { month: '12', days: '31' },
];

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

const verifyDateFormat = (date) => {
  if (
    !date.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
  ) {
    return { message: 'O campo data precisa estar no formado dia/mês/ano.' };
  }
  return true;
};

const verifyDateDays = (date) => {
  const dateSubstrings = date.split('/');
  const days = Number(dateSubstrings[0]);
  const months = dateSubstrings[1];
  const daysOffMonthInserted = monthDays.filter((e) => e.month === months)[0]
    .days;
  if (days > Number(daysOffMonthInserted)) {
    return { message: `Dia precisa estar entre 01 e ${daysOffMonthInserted}!` };
  }
  return true;
};

const notAllowFutureDate = (date) => {
  const dateSubstrings = date.split('/');
  const dateNow = new Date();
  const dateNowDay = dateNow.getDate();
  const dateNowMonth = dateNow.getMonth();
  const dateNowYear = dateNow.getFullYear();
  const dateNowFormated = new Date(dateNowYear, dateNowMonth, dateNowDay);
  const dateInserted = new Date(
    dateSubstrings[2],
    String(Number(dateSubstrings[1]) - 1),
    dateSubstrings[0]
  );
  const diffTime = Math.floor(dateInserted - dateNowFormated);
  if (diffTime > 0) {
    return { message: 'Não permitidas datas futuras!' };
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
  const verifyingDate = verifyDateFormat(payload.data_colheita);
  const verifyingDateDays = verifyDateDays(payload.data_colheita);
  const verifyingNotAllowFutureDate = notAllowFutureDate(payload.data_colheita);
  const verifyingEvent = verifyEvent(payload.evento);

  if (verifyingName.message) return verifyingName;
  if (verifyingEmail.message) return verifyingEmail;
  if (verifyingCpf.message) return verifyingCpf;
  if (verifyingCoords.message) return verifyingCoords;
  if (verifyingCrop.message) return verifyingCrop;
  if (verifyingDate.message) return verifyingDate;
  if (verifyingDateDays.message) return verifyingDateDays;
  if (verifyingNotAllowFutureDate.message) return verifyingNotAllowFutureDate;
  if (verifyingEvent.message) return verifyingEvent;

  return true;
};

export default insertValidations;
