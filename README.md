[![Build
Status](https://travis-ci.org/selfrefactor/string-fn.svg?branch=master)](https://travis-ci.org/selfrefactor/string-fn)
[![codecov](https://codecov.io/gh/selfrefactor/string-fn/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/string-fn)
[![CDNJS](https://img.shields.io/cdnjs/v/string-fn.svg)](https://cdnjs.com/libraries/string-fn)

# String-fn

String manipulation library build on top of `Rambda`

# Example

```
const stringFn = require("string-fn")
console.log(stringFn.camelCase("foo-bar-baz"))
// => fooBarBaz
```

## Benchmark

![Screen](/files/screen.png)

## Installation

- Use **yarn add string-fn** for Webpack and Node.js

- For browser usage(exported global is `StringFn`)

```
https://cdnjs.cloudflare.com/ajax/libs/string-fn/0.3.2/webVersion.js
```

## API

#### between
> between(str, left, right)

Returns substring of **str** placed between **left** and **right**

```
stringFn.between("begin foobarbaz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo   bar   baz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo bar baz end", "q", "x")
// => "begin foo bar baz end"

```
#### camelCase
> camelCase(str)

Returns camel case version of **str**.

```
stringFn.camelCase("Foo-Bar")
// => "fooBar"

stringFn.camelCase("--foo.bar")
// => "fooBar"

stringFn.camelCase("Foo-Bar")
// => "fooBar"

stringFn.camelCase("foo bar BAZ")
// => "fooBarBaz"

stringFn.camelCase("foo-bar-baz")
// => "fooBarBaz"
```

#### count
> count(str, substring)

Count number of occurances of **substring** within **str**

```
stringFn.count("fooBarfoo", "foo")
// => 2

stringFn.count("fooBarfoo", "baz")
// => 0

stringFn.count("foo1 Bar foo1 baz Foo1 foo1", "foo1")
// => 3
```

#### distance
> distance(firstString, secondString)

Calculates Levenshtein distance between **firstString** and **secondString**

```
stringFn.distance("foobarbaz", "ffoobarbaz")
// => 1

stringFn.distance("foobarbaz", "foo")
// => 6

stringFn.distance("foo", "foobarbaz")
// => 6

stringFn.distance("foobarbaz", "foobarbaz")
// => 0
```

#### distanceGerman
> distanceGerman(firstString, secondString)

Calculates Levenshtein distance between normalized German strings

```
stringFn.distanceGerman("foobarbaz", "ffoobarbaz")
// => 1

stringFn.distanceGerman("schön", "shön")
// => 1

stringFn.distanceGerman("Müde", "mude")
// => 0

stringFn.distanceGerman("die Männer", "die manner")
// => 0

stringFn.distanceGerman("der anlass", "der Anlaß")
// => 0
```

#### glob
> glob(str, globRule)

Returns boolean of **str** following **globRule**.

Three types of valid glob rules:

1. *foo
2. foo*
3. \*foo*

```
stringFn.glob("/home/dev/foo.js", "*.js")
// => true

stringFn.glob("/home/dev/foo.js", "*.ts")
// => false

stringFn.glob("/home/dev/foo.js", "/home/*")
// => true

stringFn.glob("/home/dev/foo.js", "*/dev/foo*")
// => true
```

#### indent
> indent(str:string, indentCount:number)

Indent each line in **str** with **intentCount** spaces

```
stringFn.indent("foo\nbar\nbaz", 4)
// => "    foo\n    bar\n    baz"
```

#### kebabCase
> kebabCase(str)

Return kebab case version of **str**

```
stringFn.kebabCase("fooBarBaz")
// => "foo-bar-baz"

stringFn.kebabCase("foo_bar_baz")
// => "foo-bar-baz"

stringFn.kebabCase("Foo Bar BAZ")
// => "foo-bar-baz"

stringFn.kebabCase("__FOO_BAR__")
// => "foo-bar"

stringFn.kebabCase("Foo Bar BAZ")
// => "foo-bar-baz"
```

#### maskSentence

```
maskSentence( {
  sentence: string,
  replacer: string = "_",
  charLimit: number = 3,
  words: string[] = []
} )
```

```
const sentence = "it was, for what i need, good."
const {hidden , visible} = stringFn.maskSentence({ sentence })
// hidden => ["it", "was", ",", "for", "what", "i", "need", ",", "good", "."]
// visible => ["i_", "w_s", ",", "f_r", "w__t", "i", "n__d", ",", "g__d", "."]
```
Returns object with notation **{visible: Array<string>, hidden: Array<string>}**

**visible** is array of masked words following the rules:

1. Each punctuation is treated as a word
2. If word is longer than **charLimit**, then each char from the middle part is replaced with **replacer**
3. If word is shorter than **charLimit**, then each char from the tail is replaced with **replacer**

**hidden** is the unmasked version of **visible**

You can pass **words** array so the masking rule is applied only to members of
**words**.
```
const sentence = "it was good."
const words = ["good"]
const {hidden, visible} = stringFn.maskSentence({ sentence, words })
// hidden => ["it", "was", "good", "."]
// visible => ["it", "was", "g__d", "."]
```

#### maskWords

```
maskWords({
  words:string,
  replacer:string = "_",
  charLimit: number = 3
})
```

```
stringFn.maskWords({words:"James Brown"})
// => "J___s B___n"

stringFn.maskWords({words:"James"})
// => "J___s"
```

It returns a string that is a masked version of **words**

Each word of **words** is masked following the rules:

- If word is longer than **charLimit**, then each char from the middle part is replaced with **replacer**

- If word is shorter than **charLimit**, then each char from the tail is replaced with **replacer**

#### removeIndent
> removeIndent(str)

```
stringFn.removeIndent("    foo\n    bar\n    baz")
// => "foo\nbar\nbaz"
```

#### reverse
> reverse(str)

```
stringFn.reverse("fooBarBaz")
// => "zaBraBoof"
```

#### seoTitle
> seoTitle(str:String, limit = 3)

Capitalize each word of **str** as long as word's length is higher or equal to
**limit**. First word is always capitalized.

```
stringFn.seoTitle("in my time |,of dying")
// => "In my Time of Dying"

stringFn.seoTitle("i got ants in my pants")
// => "I Got Ants in my Pants"

stringFn.seoTitle("i got ants in my pants", 2)
// => "I Got Ants In My Pants"
```

#### shuffle
> shuffle(str)

Randomize **str** content

```
stringFn.shuffle("fooBar") // => aforBo
```

#### snakeCase
> snakeCase(str)

Returns snake case version of **str**

```
stringFn.snakeCase("foo bar BAZ")
// => "foo_bar_baz"
```

#### stripPunctuation
> stripPunctuation(str)

Removes all the punctuation marks from **str**

```
stringFn.stripPunctuation("If my, wings should, fail me ...")
// => "If my wings should fail me "
```

#### stripTags
> stripTags(str)

It removes Html tags from **str**.

```
stringFn.stripTags("<p>foo <b>bar</b>   <hr/> baz</p>")
// => "foo bar baz"
```

#### titleCase
> titleCase(str)

It returns title case version of **str**.

```
stringFn.titleCase("foo bar BAZ")
// => "Foo Bar Baz"
```

#### trim
> trim(str:String)

It trims **str** and turns multiple whitespace to single whitespace

```
stringFn.trim("   foo  bar   baz   ")
// => "foo bar baz"
```

#### words
> words(str)

It returns array with the words of **str**.

```
stringFn.words("fooBarBaz")
// => [ "foo", "Bar", "Baz" ]
```

#### wordsX
> wordsX(str)

It is same as `words`, but for extended Latin languages(German, French, Finnish, etc.).

