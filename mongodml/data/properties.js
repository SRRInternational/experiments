module.exports = {
data : {
    _componentType: {
      type: "objectid",
      required: true,
      ref: "componenttype",
      editorOnly: true,
    },
    _type: {
      type: "string",
      id: "http://jsonschema.net/_type",
    },
    _component: {
      type: "string",
      required: true,
      default: "",
    },
    _layout: {
      type: "string",
    },
    _classes: {
      type: "string",
      default: "",
      isSetting: true,
      inputType: "Text",
      validators: [
      ],
      title: "Classes",
      help: "Used to style or manipulate the look and feel of this Component. These are predefined in the theme or added in Project Settings > Custom CSS/Less code.",
    },
    _isOptional: {
      type: "boolean",
      default: false,
      isSetting: true,
      inputType: "Checkbox",
      validators: [
      ],
      title: "Is this optional?",
      help: "An optional component does not have to be completed by the user.",
    },
    _isAvailable: {
      type: "boolean",
      default: true,
      isSetting: true,
      inputType: "Checkbox",
      validators: [
      ],
      title: "Is this available?",
      help: "Controls whether this component is available in the course or not.",
    },
    _isHidden: {
      type: "boolean",
      default: false,
      isSetting: true,
      inputType: "Checkbox",
      validators: [
      ],
      title: "Is this hidden?",
      help: "Enabling this is equivalent to applying the CSS 'display:none' to the component.",
    },
    _isVisible: {
      type: "boolean",
      default: true,
      isSetting: true,
      inputType: "Checkbox",
      validators: [
      ],
      title: "Is this visible?",
      help: "Disabling this is equivalent to applying the CSS 'visibility:hidden' to the component.",
    },
    _ariaLevel: {
      type: "number",
      default: 0,
      isSetting: true,
      inputType: "Number",
      validators: [
        "number",
      ],
      help: "If you need to override the default component ARIA level (as defined in Configuration Settings), set this to any number greater than 0.",
    },
    _disableAccessibilityState: {
      type: "boolean",
      default: false,
      isSetting: true,
      inputType: "Checkbox",
      validators: [
      ],
      title: "Is the accessibility state disabled?",
      help: "Controls whether the user can tab to a hidden label that describes the completion state of the component",
    },
    _parentId: {
      type: "objectid",
      required: true,
    },
    _courseId: {
      type: "objectid",
      required: true,
      editorOnly: true,
    },
    title: {
      type: "string",
      required: true,
      default: "New Component Title",
      inputType: "Text",
      validators: [
        "required",
      ],
      translatable: true,
    },
    displayTitle: {
      type: "string",
      required: false,
      default: "New Component Title",
      inputType: "DisplayTitle",
      validators: [
      ],
      help: "When viewing a component - this is the title that will be displayed",
      translatable: true,
    },
    body: {
      type: "string",
      default: "",
      inputType: "TextArea",
      validators: [
      ],
      translatable: true,
    },
    _onScreen: {
      type: "object",
      title: "On-screen classes",
      help: "These settings allow you to attach classes to the component when it is within the browser's viewport; helpful for running CSS-based animations on components as they scroll into view.",
      properties: {
        _isEnabled: {
          type: "boolean",
          default: false,
          isSetting: true,
          inputType: "Checkbox",
          validators: [
          ],
          title: "Enabled?",
        },
        _classes: {
          type: "string",
          default: "",
          isSetting: true,
          required: false,
          inputType: "Text",
          validators: [
          ],
          title: "Classes",
          help: "The CSS class(es) to add to the component element.",
        },
        _percentInviewVertical: {
          type: "number",
          required: false,
          default: 50,
          isSetting: true,
          title: "Percent in view",
          inputType: "Number",
          validators: [
            "number",
          ],
          help: "Controls what percentage of the component's height needs to be in the viewport in order for the CSS class(es) to be added.",
        },
      },
    },
    _extensions: {
      type: "object",
    },
    themeSettings: {
      type: "object",
    },
    properties: {
      type: "object",
      properties: {
        instruction: {
          type: "string",
          required: false,
          default: "",
          inputType: "Text",
          validators: [
          ],
          help: "This is the instruction text",
          translatable: true,
        },
      },
    },
    _colorLabel: {
      type: "string",
      required: false,
      editorOnly: true,
    },
  },
}