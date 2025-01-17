import { Text } from ".";
import { customRender } from "@alura/test-commons/react-testing-library";

const render = customRender();

describe("<Test />", () => {
  it("renders h1 tag", () => {
    const { container } = render(<Text tag="h1">Sample Text</Text>);

    expect(container).toMatchSnapshot();
  });
});
