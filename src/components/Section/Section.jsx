import { Title } from './Section.style';


export const Section = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    {children}
  </div>
);
