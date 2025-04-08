const baseRules = {
  // Syntax-related rules that are enabled should (generally) be errors.
  // Semantics-related rules that are enabled should (generally) be warnings.
  // Disabled because we know better
  'for-direction': 'off',

  // Disabled because we know better
  'getter-return': 'off',

  // Disabled because we know better
  'no-await-in-loop': 'off',

  // Error because there is no reason to use -0
  'no-compare-neg-zero': 'error',

  // Warn because it might be a typo and situations where it's intentional
  // are scarce enough that a linter directive suffices
  'no-cond-assign': 'warn',

  // Disabled because we know better
  'no-console': 'off',

  // Disabled because we know better
  'no-constant-condition': 'off',

  // Disabled because we know better and we do too much with control characters
  'no-control-regex': 'off',

  // Error because it's always an artifact of debugging
  'no-debugger': 'error',

  // Error because this is always an error
  'no-dupe-args': 'error',

  // Error because this is always an error
  'no-dupe-keys': 'error',

  // Error because this is always an error
  'no-duplicate-case': 'error',

  // Warn because we should explicitly mark empty blocks as intentional,
  // but not an error because we know better
  'no-empty': 'warn',

  // Error because this is always an error
  'no-empty-character-class': 'error',

  // Disabled because we know better
  'no-ex-assign': 'off',

  // Disabled because we know better and being explicit never hurt anybody
  'no-extra-boolean-cast': 'off',

  // Disabled because we know better and eslint isn't granule enough otherwise
  'no-extra-parens': 'off',

  // Disabled because typescript
  // ;(someVar as someType).someProperty is not uncommon
  'no-extra-semi': 'off',

  // Disabled because we know better
  'no-func-assign': 'off',

  // Disabled because we know better
  'no-inner-declarations': 'off',

  // Warn because this might save us some debugging and is otherwise
  // very rare
  'no-invalid-regexp': 'warn',

  // Error, but only in places where we don't know better
  'no-irregular-whitespace': [
    'error',
    {
      skipStrings: true,
      skipComments: true,
      skipRegExps: true,
      skipTemplates: true,
    },
  ],

  // Warn, because who would do this anyway? If they are, they probably know better
  'no-obj-calls': 'warn',

  // Disabled because we know better
  'no-prototype-builtins': 'off',

  // Warn, because we probably know better but nobody is perfect
  'no-regex-spaces': 'warn',

  // Warn, because more often than not, this is going to be a typo
  // instead of an intentionally sparse array; not an error because
  // we know better otherwise
  'no-sparse-arrays': 'warn',

  // Warn because we probably know better but nobody is perfect
  'no-template-curly-in-string': 'warn',

  // Error because the example page for this rule is downright scary
  'no-unexpected-multiline': 'error',

  // Warn because we should be aware of it but also sometimes we like to
  // debug our code in peace
  'no-unreachable': 'warn',

  // Warn because we rarely do this and if we do we probably know better
  'no-unsafe-finally': 'warn',

  // Normally semantics rules are kept at warn, but we should never
  // be writing code like `if (!key in object)`
  'no-unsafe-negation': 'error',

  // Normaly semantics rules are kept at warn, but we should always
  // be using isNaN()
  'use-isnan': 'error',

  // Disabled because there just isn't enough time in the day
  'valid-jsdoc': 'off',

  // Error because this is (almost) always an error
  'valid-typeof': 'error',

  // Disabled because we know better
  'accessor-pairs': 'off',

  // Disabled because we know better
  'array-callback-return': 'off',

  // Error because we shouldn't be using var at all anyway
  'block-scoped-var': 'error',

  // Disabled because we know better
  'class-methods-use-this': 'off',

  // Disabled because we know better, and sometimes we write interesting
  // code that doesn't conform to society's standards of 'beautiful', also
  // don't @ me I'm 14 I can do what I want
  complexity: 'off',

  // Disabled because we know better
  'consistent-return': 'off',

  // Error because consistent block format is important for readability;
  // see also 'cognitive strain'
  curly: ['error', 'all'],

  // Disabled because we know better
  'default-case': 'off',

  // Disabled because it's handled by TS rules below
  'default-param-last': 'off',

  // Error because consistency matters
  'dot-location': ['error', 'property'],

  // Disabled because it's handled by TS rules below
  'dot-notingSession': 'off',

  // Error because there's rarely a situation where == is better than ===
  eqeqeq: ['error', 'smart'],

  // Warn because there's usually a better way to write such loops,
  // but if we are using for..in we probably know better
  'guard-for-in': 'warn',

  // Error because it's not 2005
  'no-alert': 'error',

  // Error because they're not allowed in strict mode anyway, and we don't
  // see them enough to be annoyed by the rule
  'no-caller': 'error',

  // Error because we generally should be wrapping cases with decls with braces
  'no-case-declarations': 'error',

  // Disabled because we know better
  'no-div-regex': 'off',

  // Warn, because the bike shed has been built and rebuilt and turned into
  // a michelin star restaurant at this point
  'no-else-return': 'warn',

  // Disabled because we know better
  'no-empty-function': 'off',

  // Disabled because we know better
  'no-empty-pattern': 'off',

  // Warn because there are some convenience use-cases for it but
  // there's also a high chance it's a mistake as well. Use eslint-disable-line
  // directives to suppress and document intentional uses of ==.
  'no-eq-null': 'warn',

  // Warn, because please don't use eval() but also we (should) know better
  'no-eval': 'warn',

  // Warn, because we should know better but sometimes it's a good reminder
  // that you're probably cutting a corner somewhere - at least, think twice please
  'no-extend-native': 'warn',

  // Disabled because we know better
  'no-extra-bind': 'off',

  // Warn, because this is most commonly the result of debugging and forgetting (although
  // overall it's pretty rare)
  'no-extra-label': 'warn',

  // Disabled because we know better - yes, really. We do. We absolutely do.
  'no-fallthrough': 'off',

  // Error because it's super confusing otherwise
  'no-floating-decimal': 'error',

  // Disabled because we know better
  'no-global-assign': 'off',

  // Error because this causes so much cognitive strain when trying to visually parse code
  // Also, nobody likes a lazy developer
  'no-implicit-coercion': 'error',

  // Disabled because we know better
  'no-implicit-globals': 'off',

  // Disabled because we know better
  'no-implied-eval': 'off',

  // Disabled because we probably know better and ideally have tests
  'no-invalid-this': 'off',

  // Disabled because what even is that? We probably know better
  'no-iterator': 'off',

  // Disabled because we know better
  'no-labels': 'off',

  // Disabled because we know better and also "lone blocks" come in handy
  // occasionally when trying to keep block scope clean
  'no-lone-blocks': 'off',

  // Disabled because we know better and this rule rarely ever works correctly
  'no-loop-func': 'off',

  // Disabled because over-engineering is super annoying and we absolutely know better
  'no-magic-numbers': 'off',

  // Error because we should be strict about whitespace - also, this is --fix'able
  'no-multi-spaces': ['error', { ignoreEOLComments: true }],

  // Error because it's 2022 and you should be using template literals
  'no-multi-str': 'error',

  // Disabled because we know better
  'no-new': 'off',

  // Warn because we never do this and also this looks weird, but I don't trust
  // the logic in this rule enough to be correct
  'no-new-func': 'warn',

  // Disabled because we know better and will call out anyone that uses this in PRs
  'no-new-wrappers': 'off',

  // Error because it's deprecated and also octals suck
  'no-octal': 'error',

  // Error because octals suck
  'no-octal-escape': 'error',

  // Disabled because we know better
  'no-param-reassign': 'off',

  // Disabled because it's not common enough that we see this, and in the event we /do/ use it
  // we almost certainly know better
  'no-proto': 'off',

  // Disabled because it's handled by TS rules below
  'no-redeclare': 'off',

  // Disabled because this is just way too picky and you're only
  // going to slow yourself down with rules like this
  'no-restricted-properties': 'off',

  // Disabled because we know better
  'no-return-assign': 'off',

  // Disabled because it's handled by TS rules below
  'no-return-await': 'off',

  // Disabled because we know better
  'no-script-url': 'off',

  // Error because this is never a reason to do this
  'no-self-assign': 'error',

  // Warn because sometimes there's an 'in the moment' debugging benefit
  'no-self-compare': 'warn',

  // Error because nobody writes code like this and to be quite honest
  // I don't think many people would know how to read it
  'no-sequences': 'error',

  // Disabled because it's handled by TS rules below
  'no-throw-literal': 'off',

  // Disabled because we know better and should have tests
  'no-unmodified-loop-condition': 'off',

  'no-unused-expressions': 'error',

  // Error because it's just extra cruft if we don't
  'no-unused-labels': 'error',

  // Disabled because we know better
  'no-useless-call': 'off',

  // Disabled because we know better
  'no-useless-concat': 'off',

  // Disabled because we know better and sometimes we're being explicit
  'no-useless-escape': 'off',

  // Disabled because these are generally caught in PR and other times we're
  // being explicit - this is just too subjective to have a linter care about
  'no-useless-return': 'off',

  // Disabled becuase we know better
  'no-void': 'off',

  // Disabled because stop thought-policing me
  'no-warning-comments': 'off',

  // Error because it's not 1999
  'no-with': 'error',

  // Disabled because we probably know better and I don't trust this rule
  // to be smart enough
  'prefer-promise-reject-errors': 'off',

  // Breaking the semantics rule becuase the default behavior of parseInt()
  // can parse hexadecimal characters if you're not careful, and a lot of
  // people don't know that - which has (in the past) left software open
  // to vulnerabilities
  radix: 'error',

  // Disabled because we absolutely know better and this is a silly assertion anyway
  'require-await': 'off',

  // Disabled because 1) we aren't using vars, and 2) this isn't C89
  'vars-on-top': 'off',

  // Error becuase consistency is good and readability is better
  'wrap-iife': ['error', 'inside'],

  //                           ____
  //                        _.' :  `._
  //                    .-.'`.  ;   .'`.-.
  //           __      / : ___\ ;  /___ ; \      __
  //         ,'_ ""--.:__;".-.";: :".-.":__;.--"" _`,
  //         :' `.t""--.. '<@.`;_  ',@>` ..--""j.' `;
  //              `:-.._J '-.-'L__ `-- ' L_..-;'
  //                "-.__ ;  .-"  "-.  : __.-"
  //                    L ' /.------.\ ' J
  //                     "-.   "--"   .-"
  //
  // Error because wise we are, but 900 years wise we are not
  yoda: 'error',

  // Error because it's implied already in modern modules
  strict: ['error', 'never'],

  // Disabled because we know better
  'init-declarations': 'off',

  // Breaking the semantics rule because we should never be doing this
  'no-delete-var': 'error',

  // Error because this causes amgiguity and labels aren't common enough
  // to justify shadowing a variable
  'no-label-var': 'error',

  // Disabled because we're not that opinionated
  'no-restricted-globals': 'off',

  // Disabled because it's handled by TS rules below
  'no-shadow': 'off',

  // Error because how in the world is this even legal syntax?!
  'no-shadow-restricted-names': 'error',

  // Error because we should be documenting where identifiers come from
  'no-undef': 'error',

  // Disabled because we know better and sometimes we're trying to be explicit
  'no-undef-init': 'off',

  // Disabled because we know better
  'no-undefined': 'off',

  // warn because it's nice to know we can remove stuff, but it shouldn't break get in the way
  'no-unused-vars': 'warn',
  '@typescript-eslint/no-unused-vars': ['warn'],

  // Disabled because webpack is smart enough and it's common to place
  // utility functions at the bottom of the file
  'no-use-before-define': 'off',

  // Disabled because we know better
  'callback-return': 'off',

  // Disabled because we know better
  'global-require': 'off',

  // Disabled because we know better
  'handle-callback-err': 'off',

  // Disabled because we know better
  'no-buffer-constructor': 'off',

  // Error because consistency matters
  'no-mixed-requires': 'error',

  // Error there is never a reason to call `new require(...)` without parens
  'no-new-require': 'error',

  // Warn because while we probably know better, we should also probably not be doing this
  'no-path-concat': 'warn',

  // Disabled because what, why?
  'no-process-env': 'off',

  // Error because we're not writing CLI apps here
  'no-process-exit': 'error',

  // Disabled because we're not that opinionated
  'no-restricted-modules': 'off',

  // Disabled because we know better and sometimes sync is faster than async
  'no-sync': 'off',

  // Error because consistency and readability matter
  'array-bracket-newline': ['error', 'consistent'],

  // Error because consistency matters
  'array-bracket-spacing': [
    'error',
    'never',
    { singleValue: false, objectsInArrays: false, arraysInArrays: false },
  ],

  // Disabled because we have already specified how we want arrays to be formatted
  'array-element-newline': 'off',

  // Error because consistency matters
  'block-spacing': ['error', 'always'],

  // Disabled because it's handled by TS rules below
  'brace-style': 'off',

  // Don't warn because we know that we won't do this but typechain camelCases everything
  // and we don't want to add ignores everywhere
  camelcase: 'warn',

  // Disabled because this is easily the most annoying linter rule on the planet
  'capitalized-comments': 'off',

  // Disabled because it's handled by TS rules below
  'comma-dangle': 'off',

  // Disabled because it's handled by TS rules below
  'comma-spacing': 'off',

  // Error because consistency matters, and arguably readability (plus nobody uses comma-first so it appears
  // quite foreign if you're not used to it)
  'comma-style': ['error', 'last'],

  // Error because consistency matters
  'computed-property-spacing': ['error', 'never'],

  // Error because consistency matters and you should use a directive if you know better
  // (to be clear since this rule's name is a bit misleading, this enforces the name of the
  // variable when you do `self = this` for proper context capturing - not super common
  // anymore but still useful to lint)
  'consistent-this': ['error', 'self'],

  // Error becuase your text editor should be doing this anyway and it causes extra
  // cruft in diffs if you don't
  'eol-last': ['error', 'always'],

  // Disabled because it's handled by TS rules below
  'func-call-spacing': 'off',

  // Warn because it's generally a good idea but sometimes we know better
  'func-name-matching': ['warn', 'always'],

  // Warn as needed because we generally know better
  'func-names': ['warn', 'as-needed'],

  // Disabled because we know better and check these things in PRs
  'func-style': 'off',

  // Disabled because Prettier handles consistency and we know better otherwise
  'function-paren-newline': 'off',

  // Disabled because we're not that opinionated
  'id-blacklist': 'off',

  // Disabled because we're not that opinionated
  'id-length': 'off',

  // Disabled because we're not that opinionated
  'id-match': 'off',

  // Disabled because it's handled by TS rules below
  indent: 'off',

  // Error because consistency matters
  'jsx-quotes': ['error', 'prefer-double'],

  // Error because consistency and readability matter
  'key-spacing': [
    'error',
    { beforeColon: false, afterColon: true, mode: 'strict' },
  ],

  // Disabled because it's handled by TS rules below
  'keyword-spacing': 'off',

  // Disabled because we know better
  'line-comment-position': 'off',

  // Error because consistency matters
  'linebreak-style': ['error', 'unix'],

  // Disabled because we know better
  'lines-around-comment': 'off',

  // Disabled because it's handled by TS rules below
  'lines-between-class-members': 'off',

  // Disabled because we know better
  'max-depth': 'off',

  // Disabled because we know better and 80 characters is arbitrary
  // and was originally meant to match IBM punch cards and some
  // archaic dumb terminal widths. Thankfully, we've evolved as a species
  // to no longer require such ridiculous limitations, and trust you
  // not to abuse your newfound responsibility.
  'max-len': 'off',

  // Disabled because what kind of limitation or metric is this?
  'max-lines': 'off',

  // Disabled because we know better and thanksfully async/await gets rid of
  // most callback hell.
  'max-nested-callbacks': 2,

  // Disabled because we know better
  'max-params': 'off',

  // Disabled because we know better
  'max-statements': 'off',

  // Error and max 1, because you shouldn't be writing minified code to start with
  'max-statements-per-line': ['error', { max: 2 }],

  // Disabled because we know better and this rule isn't fine-grained enough to really
  // help with consistency or style
  'multiline-comment-style': 'off',

  // Disabled because Prettier ensures consistency here
  'multiline-ternary': 'off',

  // Disable because we work with ppl who don't do this
  'new-cap': 'off',

  // Error because consistency and the reduction of cognitive strain matter
  'new-parens': 'error',

  // Disabled because Prettier takes care of this
  'newline-per-chained-call': 'off',

  // Disabled because we know better
  'no-array-constructor': 'off',

  // Disabled because a linter shouldn't be disabling operators for which there is no alternative
  'no-bitwise': 'off',

  // Disabled because we know better
  'no-inline-comments': 'off',

  // Error for consistency; yes, this rule is --fix'able
  'no-lonely-if': 'error',

  'no-mixed-operators': 'off',

  // See `indent` rule - this is an error unless you're using tabs for indentation and spaces
  // for alignment, which we don't
  'no-mixed-spaces-and-tabs': ['error'],

  // Warn because we generally know better
  'no-multi-assign': 'warn',

  // Error for consistency and readability; this is among the many --fix'able rules, I promise
  'no-multiple-empty-lines': 'error',

  // Disabled because we know better
  'no-negated-condition': 'off',

  // Disabled because we know better and you don't realize how annoying this rule is until you enable it
  'no-nested-ternary': 'off',

  // Warn because you shouldn't be doing this...
  'no-new-object': 'warn',

  // Disabled because we know better
  // Has nothing to do with C++
  'no-plusplus': 'off',

  // Disabled because we're not picky
  'no-restricted-syntax': 'off',

  // Disabled because earlier rules should catch this and who knows what you're doing at this point
  'no-tabs': 'off',

  // Disabled because we know better
  'no-ternary': 'off',

  // Error; this is fixable and you really should be using editorconfig anyway
  'no-trailing-spaces': 'error',

  // Disabled because we know better
  'no-underscore-dangle': 'off',

  // Disabled because we know better
  'no-unneeded-ternary': 'off',

  // Error because readability and consistency count
  'no-whitespace-before-property': 'error',

  // Disabled because we know better
  'nonblock-statement-body-position': 'off',

  // Error because readability and consistency count
  'object-curly-newline': ['error', { multiline: true, consistent: true }],

  // Disabled because it's handled by TS rules below
  'object-curly-spacing': 'off',

  // Disabled because the rule isn't specific enough
  'object-property-newline': 'off',

  // Error because consistency and readability count,
  // and the old multi-decl syntax has long fallen by the wayside
  'one-var': ['error', 'never'],

  // Disabled because it's irrelevant due to `one-var`
  'one-var-declaration-per-line': 'off',

  // Error for consistency; this is indeed fixable
  'operator-assignment': ['error', 'always'],

  // Error since it's fixable, and this helps readability
  'operator-linebreak': [
    'error',
    'after',
    { overrides: { '?': 'before', ':': 'before' } },
  ],

  // Error since it's fixable and is consistent
  'padded-blocks': ['error', 'never'],

  // Disable because there is no requirement/restriction; the code should dictate
  // where padding lines are placed.
  'padding-line-between-statements': 'off',

  // Warn as prisma uses "in" as a keyword and prettier removes quotes -.-
  'quote-props': [
    'warn',
    'as-needed',
    { keywords: true, unnecessary: true, numbers: false },
  ],

  // Disabled because it's handled by TS rules below
  quotes: 'off',

  // Disable because there isn't enough time in the day
  'require-jsdoc': 'off',

  // Disabled because it's handled by TS rules below
  semi: 'off',

  // Error because this is fixable and helps consistency and readability
  'semi-spacing': ['error', { before: false, after: true }],

  // Error because why in the world would you have semi-colons at the beginning of lines; this isn't BASIC.
  'semi-style': ['error', 'last'],

  // Disabled because there really, really isn't enough time in the day
  'sort-keys': 'off',

  // Disabled because there really, really isn't enough time in the day
  'sort-vars': 'off',

  // Error because consistency and readability matter
  'space-before-blocks': ['error', 'always'],

  // Disabled because it's handled by TS rules below
  'space-before-function-paren': 'off',

  // Error because consistency matters
  'space-in-parens': ['error', 'never'],

  // Disabled because it's handled by TS rules below
  'space-infix-ops': 'off',

  // Error because readability and consistency matter
  'space-unary-ops': ['error', { words: true, nonwords: false }],

  // Error because readability and consistency matter; this is also fixable
  'spaced-comment': ['error', 'always'],

  // Error because readability and consistency matter
  'switch-colon-spacing': ['error', { after: true, before: false }],

  // Error because consistency matters
  'template-tag-spacing': ['error', 'never'],

  // Error because this isn't 1990 and utf-8 is a wo̕nd̷eŕfu͡l thiǹg
  'unicode-bom': ['error', 'never'],

  // Disabled because we know better
  'wrap-regex': 'off',

  // DIsabled because generally while consistency matters, this rule
  // will often trigger while debugging and cause massive headaches
  'arrow-body-style': 'off',

  // Disabled because Prettier takes care of this
  'arrow-parens': 'off',

  // Error becuase readability counts
  'arrow-spacing': ['error', { before: true, after: true }],

  // Error because you can still return an object or null from a constructor without needing to call
  // super() (and still avoid the ReferenceError()) but all other cases require super(). Despite the
  // docs not mentioning it, this correctly detects constructors that return instead of super().
  //
  // This is an error instead of warn even though it's a semantics check because there will never
  // be a time were we know better. It's effectively a syntax error if you don't use it correctly.
  'constructor-super': 'error',

  // Error because consistency matters
  'generator-star-spacing': 'off',

  // Warn on modifying class identifiers, because you're probably not doing something right
  // but you may still know better
  'no-class-assign': 'warn',

  // We leave that up to the developer, cause hooks sometimes return values
  // dependent on another one, and it's annoying to add a { return } all the time
  'no-confusing-arrow': 'off',

  // Error since this will always result in a runtime error
  'no-const-assign': 'error',

  // Disabled because it's handled by TS rules below
  'no-dupe-class-members': 'off',

  // Disabled because it's handled by TS rules below
  'no-duplicate-imports': 'off',

  // Disabled because we know better
  'no-loss-of-precision': 'off',

  // Warn on new Symbol() since there's a chance you know better
  'no-new-symbol': 'warn',

  // Disabled because we're not that opinionated
  'no-restricted-imports': 'off',

  // Error because this will never not (double negative) cause a reference error
  'no-this-before-super': 'error',

  // Error because this is fixable and unnecessary
  'no-useless-computed-key': 'error',

  // Error because empty constructors are unnecessary and only add visual cruft
  'no-useless-constructor': 'error',

  // Error because it's fixable and unnecessary
  'no-useless-rename': 'error',

  // Error because it's not 2010 anymore
  'no-var': 'error',

  // Disabled because it's not fixable and super annoying
  'object-shorthand': 'off',

  // Disabled because we know better
  'prefer-arrow-callback': 'off',

  // Error because it's fixable and safer (thus justifying not being a warning)
  'prefer-const': ['error', { destructuring: 'all' }],

  // Disabled because if you've ever written React code with this rule enabled you've definitely lost some hair
  'prefer-destructuring': 'off',

  // Disabled because we know better and there is a chance we're trying to be explicit
  'prefer-numeric-literals': 'off',

  // Warn because rest params are generally better, but sometimes we might know better
  'prefer-rest-params': 'warn',

  // Error because spreads are visually easier to parse than .apply() and may well
  // have a performance benefit. Also, this is fixable.
  'prefer-spread': 'error',

  // Warn because we should be moving to template literals instead of hard concatenation
  // but sometimes we might want to be explicit
  'prefer-template': 'warn',

  // Warn because we probably know better (PRs are a good thing)
  'require-yield': 'warn',

  // Error because consistency matters
  'rest-spread-spacing': ['error', 'never'],

  // Disabled because the auto-fixer isn't smart enough to help with this rule, and it's
  // not important enough to be a warning or an error.
  'sort-imports': 'off',

  // Warning because we should be providing Symbol descriptions but we might actually know better
  'symbol-description': 'warn',

  // Error because consistency matters
  'template-curly-spacing': ['error', 'never'],

  // Error because consistency and readability matter
  'yield-star-spacing': ['error', 'before'],

  // disable because we know better
  '@typescript-eslint/no-explicit-any': 'off',
};

export default baseRules;
