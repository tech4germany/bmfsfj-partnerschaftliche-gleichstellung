# Content

## Übersetzungen

Alle nachfolgenden Datein (`mit Ausnahme der modules.csv`) werden für jede Sprache in einen Ordner entsprechend des ISO 639‑1 Sprach Codes gelegt. Für deutsch also in den Ordner `de`, oder für Englisch in den Ordner `en`.

Im Fall, dass eine Datei in dem Ordner einer Sprache nicht vorhanden ist wird dann im Sprachordner für Englisch und falls auch dort nichts gefunden wird für Deutsch nachgesehen.

Die Übersetzungen für die weiteren Texte geschehen in dem direkt im Hauptordner liegenden `lang` Ordner.

## Todos

Todos werden im Ordner `todos` als Markdown (`.md`) Datein angelegt.

### Eigenschaften

Verschiedene Eigenschaften der Todos müssen oben in der Markdown Datei in einem Block definiert werden:

```
---
title: Elterngeld beantragen!
id: elterngeld-beantragen
lang: de
modules:
  - geld
  - beruf
recommendedDateFromExpectedBirth:
  weeks: -5
---
```

| Eigenschaft | Beschreibung |
| ----------- | ------------ |
| title       | Der Titel des Todos, der z.B. auf der Übersicht angezeigt wird |
| id          | Ein eindeutiges Wort, dass das Todo identifiziert. Dieser Wert darf nachträglich nicht wieder geändert werden! |
| modules     | Eine auflistung der Module in denen das Todo verortet wird. |
| recommendedDateFromExpectedBirth | siehe unten |

### Inhalt

Nach diesem Block mit den Eigenschaften des Todos kommt der eigentliche Inhalt des Todos als Text. In diesem Text wird die Markdown Syntax unterstützt [https://www.markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax).

### recommendedDateFromExpectedBirth

Eine Angabe darüber zu welchem Datum die Aufgabe bestenfalls erledigt wird. Dieses Datum wird in Abhängigkeit vom erwarten Geburtstermin angegeben. Dies kann in Wochen (`weeks`), Monaten (`months`) oder auch Tagen (`days`) geschehen. Negative Werte bedeuten, dass die Aufgabe vor der Geburt gemacht werden sollte, positive stehen für Zeitpunkte nach der Geburt.

## Module

In der Datei `modules.csv` werden die Module im CSV-Format definiert. Die Übersetzungen der Namen geschieht in den Übersetzungsdatein anhand der `id` des jeweiligen Modules.

```csv
id,color,icon
geld,#d3003a,euro-sign
beruf,#e04a09,briefcase
behoerden,#004377,paste
```

| Eigenschaft | Beschreibung |
| ----------- | ------------ |
| id          | Ein eindeutiges Wort, dass das Todo identifiziert. Dieser Wert darf nachträglich nicht wieder geändert werden! Dieser Wert wird auch in den Todos verwendet um die Todos Modulen zuzuweisen |
| color       | Der Hexcode der Farbe des Moduls |
| icon        | Der Name des Icons das für das Modul verwendet wird. Eine Auflistung der unterstützten Icons gibt es weiter unten. |

## Intro: Mehr Infos

Die Texte die bei den Intro Fragen nach dem Klick auf "Mehr Infos" angezeigt werden stehen in den Markdown Datein im `questions` Ordner.

## Unterstützte Elemente (Markdown)

### Extension Panel

Um ein "Extension Panel" einzubinden muss folgender Code an der Entsprechenden Stelle im Text eingefügt werden (die leerzeilen sind zwingend erforderlich):

```html
<bmfsfj-todo-extension-panel title="Wo" icon="map-marked-alt">

Antrag bei der Krankenkasse

</bmfsfj-todo-extension-panel>
```

Der Wert in den Anführungszeichen nach `title=` gibt den Text an der auch im eingeklappten Zustand sichtbar ist. Der Wert nach `icon=` ist das Icon neben diesem Text (Eine Auflistung der möglichen Icons folgt später). In den darauffolgenden Zeilen vor `</bmfsfj-todo-extension-panel>` kann dann normal weiterer Text geschrieben werden der nur sichtbar ist wenn das Extension-Panel ausgeklappt ist.

### Assignee Auswahl

Damit einem Todo eine (oder mehrere) Personen zugewiesen werden kann muss die Assignee Auswahl im Markdown des Todos eingebunden werden. Hierfür wird der folgende Code verwendet:

```html
<bmfsfj-todo-assignees></bmfsfj-todo-assignees>
```

### Links zu anderen Todos

Um auf andere Todos zu verlinken kann die folgende Zeile genutzt werden:

```html
<bmfsfj-todo-link todo="elterngeld-beantragen"> Elterngeld Beantragen </bmfsfj-todo-link>
```

Der Wert in den Anführungszeichen nach `todo=` ist die `id` von dem Todo auf das verlinkt werden soll. 

### Icons

Icons können wie folgt eingebunden werden:

```html
<font-awesome-icon icon="map-marked-alt"></font-awesome-icon>
```

Der Wert nacht `icon=` muss durch ein Icon aus der folgenden Liste ersetzt werden:

Unterstützte Icons:
* info-circle

* question
* euro-sign
* briefcase
* paste
* id-badge

* map-marked-alt
* calendar-alt
* calendar-check
* calendar-times
* exclamation
* hands-helping
* external-link-alt
* brain
* puzzle-piece
* user
* lightbulb

Weitere Icons von Font Awesome (siehe hier: [fontawesome.com](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid)) können in der Datei `/plugins/fontawesome.ts` registriert und dann ebenfalls verwendet werden.
