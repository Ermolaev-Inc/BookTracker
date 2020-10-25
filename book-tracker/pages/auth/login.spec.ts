import { shallow } from 'enzyme';
import Login from './login';

it('Should render Login Page', () => {
  const component = shallow(<Login />);
  const wrapper = component.find(".wrapper");
  expect(wrapper.length).toBe(1);
});
