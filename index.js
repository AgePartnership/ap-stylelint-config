'use strict';

module.exports = {
    "plugins": [
        "stylelint-scss",
        "stylelint-order"
    ],
    "ignoreFiles": [
        "**/*.yaml",
        "**/*.yml",
        "**/*.css",
        "**/node_modules/**"
    ],
    "reportInvalidScopeDisables": true,
    "reportNeedlessDisables": true,
    "reportDescriptionlessDisables": true,
    "rules": {
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-pattern": [
            "^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$",
            {
                "message": "Variable name must be kebab-case"
            }
        ],
        "order/order": [
            [
                "at-rules",
                "custom-properties",
                "dollar-variables",
                "at-variables",
                "declarations",
                "rules"
            ]
        ],
        "order/properties-alphabetical-order": true,
        "indentation": 4,
        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "after-single-line-comment",
                    "first-nested"
                ]
            }
        ],
        "declaration-block-single-line-max-declarations": 1,
        "no-missing-end-of-source-newline": true,
        "max-empty-lines": 3,
        "number-no-trailing-zeros": true,
        "number-leading-zero": "always",
        "string-quotes": "single",
        "color-hex-length": "short",
        "color-hex-case": "lower",
        "color-no-invalid-hex": true,
        "selector-attribute-quotes": "always",
        "declaration-block-no-duplicate-properties": [
            true,
            {
                "ignore": [
                    "consecutive-duplicates-with-different-values"
                ]
            }
        ],
        "function-url-scheme-allowed-list": [
            "/^//",
            "data"
        ],
        "at-rule-no-unknown": null,
        "block-no-empty": true,
        "comment-no-empty": true,
        "declaration-block-trailing-semicolon": "always",
        "font-family-name-quotes": "always-where-recommended",
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "no-duplicate-at-import-rules": true,
        "no-empty-source": true,
        "selector-max-id": 0,
        "selector-pseudo-element-colon-notation": "double",
        "at-rule-name-space-after": "always",
        "at-rule-semicolon-space-before": "never",
        "block-closing-brace-space-after": "never-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-parentheses-space-inside": "never-single-line",
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-space-after": "always",
        "media-query-list-comma-space-before": "never",
        "no-eol-whitespace": true,
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never"
    }
};
