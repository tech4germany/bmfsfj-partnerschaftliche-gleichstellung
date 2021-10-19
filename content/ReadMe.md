# Content

## Todos

Todos werden im Ordner `todos` als Markdown (`.md`) Datein angelegt.

### Eigenschaften

Verschiedene Eigenschaften der Todos müssen oben in der Markdown Datei in einem Block definiert werden:

```
---
title: Elterngeld beantragen!
id: elterngeld-beantragen
task: true
lang: de
modules:
  - geld
  - beruf
---
```

| Eigenschaft | Beschreibung |
| ----------- | ------------ |
| title       | Der Titel des Todos, der z.B. auf der Übersicht angezeigt wird |
| id          | Ein eindeutiges Wort, dass das Todo identifiziert. Dieser Wert darf nachträglich nicht wieder geändert werden! |
| task        | Muss immer `true` sein |
| lang        | Der ISO 639-1 Code der Sprache in der das Todo verfasst ist. (`de`, `en`, `tr` oder `ru`) |
| modules     | Eine auflistung der Module in denen das Todo verortet wird. |

### Inhalt

Nach diesem Block mit den Eigenschaften des Todos kommt der eigentliche Inhalt des Todos als Text. In diesem Text wird die Markdown Syntax unterstützt [https://www.markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax).

## Unterstützte Elemente

### Extension Panel

Um ein "Extension Panel" einzubinden muss folgender Code an der Entsprechenden Stelle im Text eingefügt werden (die leerzeilen sind zwingend erforderlich):

```html
<todo-extension-panel title="Wo" icon="fa-map-marker-alt">

Antrag bei der Krankenkasse

</todo-extension-panel>
```

Der Wert in den Anführungszeichen nach `title=` gibt den Text an der auch im eingeklappten Zustand sichtbar ist. Der Wert nach `icon=` ist das Icon neben diesem Text (Eine Auflistung der möglichen Icons folgt später). In den darauffolgenden Zeilen vor `</todo-extension-panel>` kann dann normal weiterer Text geschrieben werden der nur sichtbar ist wenn das Extension-Panel ausgeklappt ist.

### Links zu anderen Todos

Um auf andere Todos zu verlinken kann die folgende Zeile genutzt werden:

```html
<todo-link todo="elterngeld-beantragen"> Elterngeld Beantragen </todo-link>
```

Der Wert in den Anführungszeichen nach `todo=` ist die `id` von dem Todo auf das verlinkt werden soll. 

### Icons

Icons können wie folgt eingebunden werden:

```html
<font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
```

Der Wert nacht `icon=` muss durch ein Icon aus der folgenden Liste ersetzt werden:

Unterstützte Icons:
* map-marker-alt

Weitere Icons von Font Awesome (siehe hier: [fontawesome.com](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid)) können in der Datei `plugins/fontawesome.ts` registriert werden.
