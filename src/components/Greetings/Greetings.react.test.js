import React from 'React'
import Greetings from './Greetings'
import renderer from 'react-test-renderer'

test('Should greet', () => {
    const component = renderer.create(<Greetings />)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
