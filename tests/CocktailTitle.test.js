// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CocktailTitle from '../components/CocktailTitle';
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("CocktailTitle", () => {
  test('should render the title', () => {
      const wrapper = shallow(<CocktailTitle />);
      console.log(wrapper.debug());
      
     // expect(wrapper.getElements()).toMatchSnapshot();
});
    // const {getByText}= render(<CocktailTitle/>);
    // const linkElement = getByText('Welcome to CocktailDB App')
    // expect(linkElement).toBeInTheDocument
  });
  
