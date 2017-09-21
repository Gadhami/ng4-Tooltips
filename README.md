**`NB. Although functional, please note that this is an alpha / pre-beta release - Do NOT use in production`**

---

# ng4-Tooltips

* This is an angular 4+ port of the fantastic [javascript Tooltip Animations demo](https://tympanus.net/codrops/2017/05/31/playful-little-tooltip-ideas/) by [tympanus.net](https://tympanus.net/codrops/)

* An Angular 2 version isn't planned, but it should be very easy to port it (I didn't test, but it may even work without any change)


# Differences between tympanus & this port:

The most important changes (beside the native angular 4 library / npm package format) are:

* The ability to pass either text or a complete component

    That's right! Your tooltips can be as simple or as complex as you want!

* Better control over tooltips styling

* The ability to show tooltips either on `click` or on `hover`


# Demo & Screenshots

* [Demo](https://ng4-tooltips.github.io/demo/) (Yet to be uploaded)

* [Screenshot](https://ng4-tooltips.github.io/demo/assets/images/demo.gif) (Yet to be uploaded)


# How to use

1.   Create a new angular 2+ project. If you are using Angular CLI, just run this command in command line:

            ng new YOUR_PROJECT_NAME

2.  Install ng4-tooltips via NPM by running this command:

            npm install ng4-tooltips

3.  To add an item along with its tooltip, simply add the component tag, ie.

    ```html
        <app-tooltip
            [tooltip]="tooltip"
        ></app-tooltip>
    ```

That's all!


# License

MIT

---

Cheers!