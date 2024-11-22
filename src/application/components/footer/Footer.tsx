import {
  Wrapper,
  ContainerCopyRight,
  CopyRight,
  AppVersion
} from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <ContainerCopyRight>
        <CopyRight>
          &copy; Google
          <span> {currentYear}</span>
        </CopyRight>
        <AppVersion>
          Version:&nbsp;
          <span>{process.env.REACT_APP_VERSION}</span>
        </AppVersion>
      </ContainerCopyRight>
    </Wrapper>
  );
};

export default Footer;
