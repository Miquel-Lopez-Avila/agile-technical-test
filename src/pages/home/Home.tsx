import Logo from '@/application/components/logo/Logo';
import SearchForm from '@/common/components/search-form/SearchForm';
import { Container, Wrapper } from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Logo width={272} height={92} />
        <SearchForm />
      </Container>
    </Wrapper>
  );
};

export default Home;
