# springer-fresh

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1. It is assumed that you have node, bower and grunt installed on your machine.

After forking or downloading please run the following in the folder terminal window

`npm install`

then

`bower install`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Possible problems

Karma can sometimes gives us some problems, this should be covered in the `package.json` file but when running test, should you get an error there may be a problem with karma, try running the following"

`npm install karma-jasmine  --save-dev`
`npm install grunt-karma --save-dev`


## Comments by Mike Savage

Hi, I was a little unsure about the requirements as the wording seemed strange, I wanted to clarify what was actually required and what was the model with documents and watermarks.... however due to a very busy week I left the assignment to the weekend (Sunday morning) when it was too late to ask questions, so I made something hoping it is on the right lines. It should show an understanding of what is desired if it doesn't meet the actual requirements!

In the same respect after creating the services and the tests I decided to create a view and a controller so there is an actual app to play with. By adding this I then needed to add some styles (rather ugly ones I know) and borrow some scaffolding from bootstrap - I just copied and pasted some generated code than add Sass due to potential issues with Compass being on your machines and the overhead of me having to customise official-bootstrap-sass in bower. To give the app a 'Real World' feel I also mocked a backend API. You will see this in the `run` block in the `app.js`

Please note that due to time restrictions (I was told to allocate two hours) I have only done minimal browser testing on my personal computer (Mac OS Sierra 10.12.2) thus I have only done some 'layout checks' in Safari, Firefox and Chrome.

Ideally I should have created the project using Angular2, Ember, ReactJS (even Backbone) but seeing as AngularJS does not provide a standardized way to define model objects I thought it would be fun to use AngularJS (Angular2 seemed a bit of an overkill).

If you have any questions, thoughts or criticisms please don't hesitate to get in touch.

Mike Savage