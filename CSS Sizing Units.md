# CSS Sizing Units

## px

- pixel in monitor like 1080x1920 meaning 1080 \* 1920 = 2073600 pixel
- default font size in browser is 16px

## rem

- using the default font size provide by browser
- this can be changed by website code

## em

- use the value in paragraph, div, in class,...
- like the div tag set font size is 36px

## em vs rem

- `em` can change the value in different div tag inside in or some place in code
- `rem` can't change by set by the element in code
- em can be conflit if have many sizing in inside or outside

## vh

- the view of height how many percent eg. 50% of window

```css
.box {
	height: 5vh;
}
```

## vw

- the view of width how many percent eg. 60% of windows

```css
.box {
	width: 5vw;
}
```

## ch

- how many character in width
- eg. line break in 80ch
- read: https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/

> repo -> ongdev/client -> livechat.vue
> // TODO: can use ch

```css
.message-text {
	color: var(--message-text-color);
	width: 220px;
	word-break: break-word;
}
```

---

- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
- https://web.dev/learn/css/sizing/

#Technology_and_applied_sciences/programming/css