const traverse = require("traverse");

var data = {
    title: "abcd",
    displayTitle: "abcd",
    body: "",
    subtitle: "",
    description: "",
    instruction: "",
    _htmlClasses: "",
    _buttons: {
      _submit: {
        buttonText: "Submit",
        ariaLabel: "Submit",
      },
      _reset: {
        buttonText: "Reset",
        ariaLabel: "Reset",
      },
      _showCorrectAnswer: {
        buttonText: "Show correct answer",
        ariaLabel: "Show correct answer",
      },
      _hideCorrectAnswer: {
        buttonText: "Show your answer",
        ariaLabel: "Show your answer",
      },
      _showFeedback: {
        buttonText: "Show feedback",
        ariaLabel: "Show feedback",
      },
      remainingAttemptsText: "attempts remaining",
      remainingAttemptText: "final attempt",
      disabledAriaLabel: "This button is disabled at the moment",
    },
    _classes: "",
    _lockType: "",
    _start: {
      _isEnabled: false,
      _startIds: [
      ],
      _force: false,
      _isMenuDisabled: false,
    },
    _globals: {
      _accessibility: {
        skipNavigationText: "Skip navigation",
        _ariaLabels: {
          answeredIncorrectly: "You answered incorrectly",
          answeredCorrectly: "You answered correctly",
          selectedAnswer: "selected",
          unselectedAnswer: "not selected",
          skipNavigation: "Skip Navigation",
          previous: "Back",
          navigationDrawer: "Open course resources.",
          close: "Close",
          closeDrawer: "Close Drawer",
          closeResources: "Close resources",
          drawer: "Top of side drawer",
          closePopup: "Close popup",
          next: "Next",
          done: "Done",
          complete: "Completed",
          incomplete: "Incomplete",
          incorrect: "Incorrect",
          correct: "Correct",
          locked: "Locked",
          visited: "Visited",
        },
      },
      _components: {
        _text: {
          ariaRegion: "",
        },
        _narrative: {
          ariaRegion: "Slide show. Select the next button to progress.",
          previous: "{{#if title}}Back to {{{title}}} (item {{itemNumber}} of {{totalItems}}){{else}}{{_globals._accessibility._ariaLabels.previous}}{{/if}}",
          next: "{{#if title}}Forward to {{{title}}} (item {{itemNumber}} of {{totalItems}}){{else}}{{_globals._accessibility._ariaLabels.next}}{{/if}}",
        },
        _media: {
          ariaRegion: "Media player{{#any _transcript._inlineTranscript _transcript._externalTranscript}} and transcript{{/any}}.",
          skipToTranscript: "Skip to transcript",
          playText: "Play",
          pauseText: "Pause",
          stopText: "Stop",
          audioPlayerText: "Audio Player",
          videoPlayerText: "Video Player",
          tracksText: "Captions/Subtitles",
          timeSliderText: "Time Slider",
          muteText: "Mute Toggle",
          unmuteStatusText: "Unmute",
          muteStatusText: "Mute",
          volumeSliderText: "Volume Slider",
          fullscreenText: "Fullscreen",
          goFullscreenText: "Go Fullscreen",
          turnOffFullscreenText: "Turn off Fullscreen",
          noneText: "None",
          skipBackText: "Skip back %1 seconds",
          allyVolumeControlText: "Use Up/Down Arrow keys to increase or decrease volume.",
          progessHelpText: "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
        },
        _hotgraphic: {
          ariaRegion: "Image with selectable areas. Select each button to show more information.",
          popupPagination: "{{itemNumber}} / {{totalItems}}",
        },
        _accordion: {
          ariaRegion: "List of expandable sections. Select each button to expand the content.",
        },
        _graphic: {
          ariaRegion: "",
          scrollAriaLabel: "Use the scrollbar to pan the image left and right. {{#if _graphic.alt}}{{_graphic.alt}}{{/if}}",
        },
        _matching: {
          ariaRegion: "Matching. Select from lists and then submit.",
          ariaCorrectAnswer: "The correct answer for {{{itemText}}} is {{{correctAnswer}}}",
          ariaUserAnswer: "The answer you chose for {{{itemText}}} was {{{userAnswer}}}",
        },
        _textinput: {
          ariaRegion: "Text input. Type your answer and then submit.",
        },
        _mcq: {
          ariaRegion: "Multiple choice question",
          ariaCorrectAnswer: "The correct answer is {{{correctAnswer}}}",
          ariaCorrectAnswers: "The correct answers are {{{correctAnswer}}}",
          ariaUserAnswer: "The answer you chose was {{{userAnswer}}}",
          ariaUserAnswers: "The answers you chose were {{{userAnswer}}}",
        },
        _gmcq: {
          ariaRegion: "Multiple choice question",
          ariaCorrectAnswer: "The correct answer is {{{correctAnswer}}}",
          ariaCorrectAnswers: "The correct answers are {{{correctAnswer}}}",
          ariaUserAnswer: "The answer you chose was {{{userAnswer}}}",
          ariaUserAnswers: "The answers you chose were {{{userAnswer}}}",
        },
        _assessmentResults: {
          ariaRegion: "Assessment results.",
        },
        _slider: {
          ariaRegion: "Slider. Respond to the question by selecting a value on the scale and then submit.",
          ariaCorrectAnswer: "The correct answer is {{{correctAnswer}}}",
          ariaCorrectAnswerRange: "The correct answer is any value from {{{bottom}}} to {{{top}}}",
          ariaUserAnswer: "The answer you chose was {{{userAnswer}}}",
          labelStart: "Start of the scale",
          labelEnd: "End of the scale",
        },
      },
      _menu: {
        _boxMenu: {
          durationLabel: "Duration:",
        },
      },
    },
    _type: "course",
    createdBy: "637792053c221826a4ad1e4c",
    tags: [
      "634e7984acf20067e49848fd",
      "634e7984acf20067e4984901",
      "634e7985acf20067e4984903",
      "634e7985acf20067e4984906",
      "634e7985acf20067e4984907",
      "634e7985acf20067e4984909",
      "634e7985acf20067e498490a",
    ],
    _extensions: {
      _assessment: {
        _isPercentageBased: true,
        _scoreToPass: 60,
        _correctToPass: 60,
      },
    },
    menuSettings: {
      _boxMenu: {
        _backgroundImage: {
          _large: "",
          _medium: "",
          _small: "",
        },
        _backgroundStyles: {
          _backgroundRepeat: null,
          _backgroundSize: null,
          _backgroundPosition: null,
        },
        _menuHeader: {
          _backgroundImage: {
            _large: "",
            _medium: "",
            _small: "",
          },
          _backgroundStyles: {
            _backgroundRepeat: null,
            _backgroundSize: null,
            _backgroundPosition: null,
          },
          _minimumHeights: {
            _large: null,
            _medium: null,
            _small: null,
          },
        },
      },
    },
    properties: {
      _requireCompletionOf: -1,
    },
  };

var trav = traverse(data);
console.log(trav)