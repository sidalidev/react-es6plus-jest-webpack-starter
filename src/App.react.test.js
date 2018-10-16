import React from 'react'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from './App'

test('Should greet', () => {
    const app = render(<App />)
    expect(app.text()).toEqual('Hello There!')
})
