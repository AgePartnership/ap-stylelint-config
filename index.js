export default {
    "extends": ["stylelint-config-standard"],
    "plugins": [
        "stylelint-scss",
        "stylelint-order",
        "stylelint-use-nesting"
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
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-same-name-blockless", "first-nested"],
                ignore: ["after-comment"],
                ignoreAtRules: ["else"]
            },
        ],
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-pattern": [
            "^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$",
            {
                "message": "Variable name must be kebab-case"
            }
        ],
        "order/order": [
            [
                "dollar-variables",
                "at-rules",
                "custom-properties",
                "at-variables",
                "declarations",
                "rules"
            ]
        ],
        "order/properties-alphabetical-order": true,
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "csstools/use-nesting": "always",
        "no-duplicate-selectors": true,
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
        "color-hex-length": "short",
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
        "font-family-name-quotes": "always-where-recommended",
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "import-notation": "string",
        "no-duplicate-at-import-rules": true,
        "no-empty-source": true,
        "selector-max-id": 0,
        "selector-pseudo-element-colon-notation": "double",
        "property-no-unknown": true,
    }
};
