<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { onMounted, ref, toRaw, watchEffect } from 'vue'

const emit = defineEmits(['contentChange'])
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  height: {
    type: [String, Number],
    default: 500
  },
  readonly: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'javascript'
  }
})
console.log('props: ' + JSON.stringify(props))
const editorContainer = ref<any>(null)
const editor = ref<any>(null)
const data = ref(props.value)
const editor_height = ref(`${props.height}px`)
onMounted(() => {
  if (props.type === 'curl') {
    monaco.languages.register({
      id: props.type
    })

    monaco.languages.setMonarchTokensProvider(props.type, {
      ignoreCase: true,
      tokenizer: {
        root: [
          [/curl/, { token: 'string.escape' }],
          [/-X|-H|-d/, { token: 'keyword' }],
          [/POST|GET|DELETE|PATCH|PUT/, { token: 'comment.doc' }]
        ]
      }
    })
  }

  monaco.languages.registerHoverProvider(props.type, {
    provideHover: function (model, position) {
      const lineword = model.getLineContent(position.lineNumber) // Получить все содержимое строки, на которую наведен курсор
      const word = model.getWordAtPosition(position)?.word // Получите слово, на которое наведен курсор
      if (word === 'name') {
        return {
          contents: [
            {
              value: `${word}`
            },
            {
              value: ['name', 'name'].join('\n\n')
            }
          ]
        }
      } else if (undefined !== word) {
        return {
          contents: [
            {
              value: `${word}`
            },
            {
              value: [lineword].join('\n\n')
            }
          ]
        }
      }
    }
  })
  editor.value = monaco.editor.create(editorContainer.value, {
    value: data.value,
   language: '',
    folding: true, // Следует ли сворачивать
    foldingHighlight: true, // Складывающаяся высокая линия
    foldingStrategy: 'indentation', // Стратегия сворачивания  auto | indentation
    showFoldingControls: 'always', // Следует ли постоянно отображать сворачивание always | mouseover
    disableLayerHinting: true, // Моноширинная оптимизация, Отключить привязку к слою
    emptySelectionClipboard: false, //Пустой буфер обмена для выделения
    selectionClipboard: false, // Панель выбора
    automaticLayout: true, //Автоматическая компоновка
    codeLens: false, // Кодовая линза
    scrollBeyondLastLine: false, //Прокрутить до последней строки
    colorDecorators: true, //Цветовые декораторы
    accessibilitySupport: 'off', // Поддержка доступности "auto" | "off" | "on"
    lineNumbers: 'on', // Номера строк： "on" | "off" | "relative" | "interval" | function
    lineNumbersMinChars: 5, //Наименьший символ номера строки   number
    readOnly: false //true | false
  })
  console.log(editor.value.value)
  editor.value.onDidChangeModelContent(() => {
    //Возвращает значение родительскому компоненту в режиме реального времени при изменении содержимого
    emit('contentChange', toRaw(editor.value).getValue())
  })
})

watchEffect(() => {
  //Прослушайте изменения в значении родительского компонента и переназначите значение редактору
  if (editor.value) toRaw(editor.value).setValue(props.value)
})
console.log (watchEffect)
</script>
<template>
  <div class="editorapp">
    <div ref="editorContainer" :style="{ height: editor_height }"></div>
  </div>
</template>
