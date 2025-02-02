export enum Tag {
  Align = 'align',
  Alpha = 'alpha',
  Color = 'color',
  Bold = 'b',
  Italic = 'i',
  CSpace = 'cspace',
  Font = 'font',
  Indent = 'indent',
  LineHeight = 'line-height',
  LineIndent = 'line-indent',
  Link = 'link',
  Lowercase = 'lowercase',
  Uppercase = 'uppercase',
  Smallcaps = 'smallcaps',
  Margin = 'margin',
  Mark = 'mark',
  MSpace = 'mspace',
  NoParse = 'noparse',
  NoBR = 'nobr',
  Page = 'page',
  Pos = 'pos',
  Size = 'size',
  Space = 'space',
  Sprite = 'sprite',
  Strikethrough = 's',
  Underline = 'u',
  Style = 'style',
  Sub = 'sub',
  Sup = 'sup',
  VOffset = 'voffset',
  Width = 'width'
}

export const allTags: string[] = [
  Tag.Align,
  Tag.Alpha,
  Tag.Color,
  Tag.Bold,
  Tag.Italic,
  Tag.CSpace,
  Tag.Font,
  Tag.Indent,
  Tag.LineHeight,
  Tag.LineIndent,
  Tag.Link,
  Tag.Lowercase,
  Tag.Uppercase,
  Tag.Smallcaps,
  Tag.Margin,
  Tag.Mark,
  Tag.MSpace,
  Tag.NoParse,
  Tag.NoBR,
  Tag.Page,
  Tag.Pos,
  Tag.Size,
  Tag.Space,
  Tag.Sprite,
  Tag.Strikethrough,
  Tag.Underline,
  Tag.Style,
  Tag.Sub,
  Tag.Sup,
  Tag.VOffset,
  Tag.Width
];

export const tagsWithValue: string[] = [
  Tag.Align,
  Tag.Alpha,
  Tag.Color,
  Tag.CSpace,
  Tag.Font,
  Tag.Indent,
  Tag.LineHeight,
  Tag.LineIndent,
  Tag.Link,
  Tag.Margin,
  Tag.Mark,
  Tag.MSpace,
  Tag.Pos,
  Tag.Size,
  Tag.Space,
  Tag.Sprite,
  Tag.Style,
  Tag.VOffset,
  Tag.Width
];

export const tagsWithNoBody: string[] = [Tag.Sprite, Tag.Pos];
export const tagsAutoclose: string[] = [
  Tag.VOffset,
  Tag.Size,
  Tag.CSpace,
  Tag.Align,
  Tag.Width,
  Tag.Font
];
