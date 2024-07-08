define(['jquery', 'lexical'], function($, Lexical) {
    return {
        init: function() {
            $(document).ready(function() {
                const container = document.getElementById('editor');
                const editor = Lexical.createEditor({
                    namespace: 'MyEditorNamespace',
                    nodes: [],
                    onError: (error) => {
                        console.error('Lexical Error:', error);
                    }
                });

                editor.update(() => {
                    const root = editor.getRootElement();
                    root.insertText("Hello, Lexical 2024!");
                });
            });
        }
    };
});
