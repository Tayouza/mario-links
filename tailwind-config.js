tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-tertiary": "#313030",
                "surface-container-high": "#2a2a2a",
                "tertiary-container": "#d2d0cf",
                "on-primary-fixed": "#211000",
                "on-secondary-fixed": "#1a1c1c",
                "surface-bright": "#3a3939",
                "inverse-primary": "#BF5A00",
                "on-surface": "#e5e2e1",
                "secondary-fixed": "#e2e2e2",
                "surface-container-low": "#1c1b1b",
                "on-tertiary-container": "#5a5959",
                "primary-fixed": "#FFD8B3",
                "on-primary-container": "#BF5A00",
                "secondary": "#c6c6c7",
                "tertiary-fixed-dim": "#c8c6c5",
                "on-secondary-fixed-variant": "#454747",
                "error": "#ffb4ab",
                "background": "#131313",
                "secondary-fixed-dim": "#c6c6c7",
                "on-primary": "#4E2600",
                "inverse-surface": "#e5e2e1",
                "outline-variant": "#3b494c",
                "on-tertiary-fixed": "#1c1b1b",
                "on-error": "#690005",
                "on-background": "#e5e2e1",
                "on-error-container": "#ffdad6",
                "surface-variant": "#353534",
                "surface-container": "#201f1f",
                "surface-dim": "#131313",
                "tertiary-fixed": "#e5e2e1",
                "tertiary": "#efeceb",
                "on-secondary-container": "#b4b5b5",
                "primary-container": "#FF9800",
                "on-tertiary-fixed-variant": "#474746",
                "on-secondary": "#2f3131",
                "surface": "#131313",
                "surface-container-lowest": "#0e0e0e",
                "primary-fixed-dim": "#FFA726",
                "primary": "#FFF3E0",
                "on-primary-fixed-variant": "#7F3C00",
                "error-container": "#93000a",
                "secondary-container": "#454747",
                "on-surface-variant": "#bac9cc",
                "outline": "#849396",
                "surface-tint": "#FF9800",
                "surface-container-highest": "#353534",
                "inverse-on-surface": "#313030"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "section-padding": "2rem",
                "margin-x": "1.5rem",
                "gutter": "1rem",
                "stack-gap": "0.75rem",
                "container-max": "480px"
            },
            "fontFamily": {
                "headline-md": ["Inter", "sans-serif"],
                "label-caps": ["Space Grotesk", "sans-serif"],
                "headline-lg": ["Inter", "sans-serif"],
                "body-lg": ["Inter", "sans-serif"]
            },
            "fontSize": {
                "headline-md": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                "label-caps": ["12px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }],
                "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "body-lg": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }]
            }
        }
    }
}
