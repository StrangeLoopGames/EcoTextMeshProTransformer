const { transform, Tag } = require('../dist/index.js');

const testCallback = (openTag, content) => {
  switch (openTag.tag) {
    case Tag.Color: {
      return `[myColor=${openTag.value}]${content}[/myColor]`;
    }
    case Tag.Underline:
      return `[underline]${content}[/underline]`;
    case Tag.Italic:
      return `[italic]${content}[/italic]`;
    case Tag.Bold:
      return `[bold]${content}[/bold]`;
    case Tag.Font:
      return `[font="${openTag.value}"]${content}[/font]`;
  }

  return content;
};

describe('transform', function () {
  test('simple', function () {
    const result = transform(`
    was <color=red>test <color=blue><u><b>wd</b></u></color> xad
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('without close tags', function () {
    const result = transform(`
    was <color=red>test <color=blue><u><b>wd xad
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('unknown tags', function () {
    const result = transform(`
    was <color=red>test <unknown>wd xad
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('invalid closing of tag', function () {
    const result = transform(`
    was <color=red>test <b>wd xad</color>
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('two top level tags', function () {
    const result = transform(`
    was <color=red>test</color> <color=blue><b>wd xad
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('two top level tags with inner styles', function () {
    const result = transform(`
    was <color=red>te<u>st</u></color> <color=blue><b>wd xad
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('style without value', function () {
    const result = transform(`
    was <link>test</link>
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('style with value in quotes', function () {
    const result = transform(`
    was <font=" my test  value">test</font>
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('color shorthand', function () {
    const result = transform(`
    was <#333666>test</color>
    `, testCallback);

    expect(result).toMatchSnapshot();
  });

  test('multiline', function () {
    const result = transform(`
    <color=red>
    title - text

    -a --abc - <b>description</b>
    -a --abc - <b>description</b>
    -a --abc - <b>description</b>
    -a --abc - <b>description</b>
    </color>
    `, testCallback);

    expect(result).toMatchSnapshot();
  });
});
