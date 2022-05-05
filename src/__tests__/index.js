import { render, screen, wait, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders without crashing", async () => {
  render(<App />);
  //ahora es asincrono
  const title = await screen.findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});

/*
test('home work as expected', async () => {
  const {container} = render(<App />);
  //console.log(screen) screen tiene todos las funcionalidades que nos saríá el render
 
  // eslint-disable-next-line testing-library/no-container
  //const gifLink = await wait( ()=> container.querySelector('.Gif-link'))

  //expect(gifLink).toBeVisible();
});
*/

//TODO:PENDIENTE
test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, {target: {value: 'Matrix'}})
  const button = await screen.findByRole("button");
  fireEvent.click(button);

  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});
