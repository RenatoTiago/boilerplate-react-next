import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Main from '.'

describe('<Main/>', () => {
  it('should render the main', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Boilerplate/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
