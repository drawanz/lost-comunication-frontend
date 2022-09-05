import Container from 'react-bootstrap/Container';
import GeneralForm from '../../components/generalForm/GeneralForm';
import SearchComponent from '../../components/searchComponent/SearchComponent';

export default function InsertPage() {
  return (
    <Container>
      <SearchComponent />
      <GeneralForm />
    </Container>
  );
}
