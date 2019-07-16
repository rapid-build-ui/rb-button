## [0.0.19](https://github.com/rapid-build-ui/rb-button/compare/v0.0.18...v0.0.19) (2019-07-16)


### Dependencies

* **bump:** deps base v0.0.12 and rb-icon v0.0.17 ([adac9df](https://github.com/rapid-build-ui/rb-button/commit/adac9df))



## [0.0.18](https://github.com/rapid-build-ui/rb-button/compare/v0.0.17...v0.0.18) (2019-07-12)


### Dependencies

* **bump:** dep base v0.0.11



## [0.0.17](https://github.com/rapid-build-ui/rb-button/compare/v0.0.16...v0.0.17) (2019-07-05)


### Features

* **version:** add to component properties accessible via this.version ([90208a8](https://github.com/rapid-build-ui/rb-button/commit/90208a8))


### Dependencies

* **bump:** deps rb-base v0.0.10 and rb-icon v0.0.15 ([0d6fc53](https://github.com/rapid-build-ui/rb-button/commit/0d6fc53))



## [0.0.16](https://github.com/rapid-build-ui/rb-button/compare/v0.0.15...v0.0.16) (2019-05-09)


### Bug Fixes

* **occasional shift shock:** of content ([71bca10](https://github.com/rapid-build-ui/rb-button/commit/71bca10))


### Features

* **new api option:** onclick, just supply a function ([46116f7](https://github.com/rapid-build-ui/rb-button/commit/46116f7))
* **new api option text:** remove kind = text and make it an api option so kind colors will apply ([f86924e](https://github.com/rapid-build-ui/rb-button/commit/f86924e))
* **styling:** add a global font family and inherit more styles when it is a text button ([7464cd6](https://github.com/rapid-build-ui/rb-button/commit/7464cd6))
* **type submit:** support asynchronous form validation before submitting the form ([99952d3](https://github.com/rapid-build-ui/rb-button/commit/99952d3))


### Dependencies

* **bump:** deps rb-base v0.0.9 and rb-icon v0.0.14 ([5d97043](https://github.com/rapid-build-ui/rb-button/commit/5d97043))



## [0.0.15](https://github.com/rapid-build-ui/rb-button/compare/v0.0.14...v0.0.15) (2019-03-05)


### Features

* **icon animation:** add it via upgrading rb-icon to v0.0.13 ([e0d25d5](https://github.com/rapid-build-ui/rb-button/commit/e0d25d5))


### Dependencies

* **bump:** deps rb-base v0.0.8 and rb-icon v0.0.13 ([dc90e37](https://github.com/rapid-build-ui/rb-button/commit/dc90e37))



## [0.0.14](https://github.com/rapid-build-ui/rb-button/compare/v0.0.13...v0.0.14) (2019-02-24)


### Bug Fixes

* **chrome v71.0.3+:** vertical alignment issue when nested in other components ([da2f85e](https://github.com/rapid-build-ui/rb-button/commit/da2f85e))
* **icon:** from partially getting cut off in some scenarios ([ef399fb](https://github.com/rapid-build-ui/rb-button/commit/ef399fb))
* **safari:** extra space due to browser default margin ([73d10af](https://github.com/rapid-build-ui/rb-button/commit/73d10af))


### Features

* **new api option:** icon-valign ([209cbea](https://github.com/rapid-build-ui/rb-button/commit/209cbea))


### Dependencies

* **bump:** deps rb-base v0.0.7 and rb-icon v0.0.12 ([cb9acad](https://github.com/rapid-build-ui/rb-button/commit/cb9acad))



## [0.0.13](https://github.com/rapid-build-ui/rb-button/compare/v0.0.12...v0.0.13) (2018-12-05)


### Features

* **bump:** deps rb-base v0.0.6 and rb-icon v0.0.11 ([2539039](https://github.com/rapid-build-ui/rb-button/commit/2539039))
* **css variables:** add and expose them ([2a9c733](https://github.com/rapid-build-ui/rb-button/commit/2a9c733))
* **hidden attribute:** display style that respects the hidden attribute ([b7e34c8](https://github.com/rapid-build-ui/rb-button/commit/b7e34c8))
* **new kind:** secondary ([08f5b81](https://github.com/rapid-build-ui/rb-button/commit/08f5b81))


### Performance Improvements

* **css:** improve browser performance by adding css contain property ([d49039a](https://github.com/rapid-build-ui/rb-button/commit/d49039a))



## [0.0.12](https://github.com/rapid-build-ui/rb-button/compare/v0.0.11...v0.0.12) (2018-11-13)


### Dependencies

* **bump:** deps rb-base v0.0.5 and rb-icon v0.0.10 ([c828de4](https://github.com/rapid-build-ui/rb-button/commit/c828de4))



## [0.0.11](https://github.com/rapid-build-ui/rb-button/compare/v0.0.10...v0.0.11) (2018-09-26)


### Dependencies

* **bump:** deps rb-base v0.0.4 and rb-icon v0.0.9 ([02ba91d](https://github.com/rapid-build-ui/rb-button/commit/02ba91d))


### BREAKING CHANGES

* **api option:** change icon to icon-kind ([115e6d7](https://github.com/rapid-build-ui/rb-button/commit/115e6d7))

To migrate the code follow the example below:

**Before:**  
icon="heart"

**Now:**  
icon-kind="heart"



## [0.0.10](https://github.com/rapid-build-ui/rb-button/compare/v0.0.9...v0.0.10) (2018-09-14)


### Features

* **submit:** add native browser submit support ([979a32e](https://github.com/rapid-build-ui/rb-button/commit/979a32e))


### Dependencies

* **bump:** deps rb-base v0.0.3 and rb-icon v0.0.8 ([cfee9d6](https://github.com/rapid-build-ui/rb-button/commit/cfee9d6))



## [0.0.9](https://github.com/rapid-build-ui/rb-button/compare/v0.0.8...v0.0.9) (2018-09-05)


### Dependencies

* **rb-base:** bump to v0.0.2 ([bca6af1](https://github.com/rapid-build-ui/rb-button/commit/bca6af1))



## [0.0.8](https://github.com/rapid-build-ui/rb-button/compare/v0.0.7...v0.0.8) (2018-08-29)


### Dependencies

* **rb-base:** replace deps lit-html and skatejs with @rapid-build-ui/rb-base and make corresponding updates ([ef2e709](https://github.com/rapid-build-ui/rb-button/commit/ef2e709))



## [0.0.7](https://github.com/rapid-build-ui/rb-button/compare/v0.0.6...v0.0.7) (2018-07-18)


### Features

* **display:** set its css host display to inline-block like default html button ([3e14ba7](https://github.com/rapid-build-ui/rb-button/commit/3e14ba7))



## [0.0.6](https://github.com/rapid-build-ui/rb-button/compare/v0.0.5...v0.0.6) (2018-07-11)


Release contains:
* some refactoring
* bump deps: skatejs v5.2.1 and rb-icon v0.0.5



## [0.0.5](https://github.com/rapid-build-ui/rb-button/compare/v0.0.4...v0.0.5) (2018-07-08)


Release switches web components library Polymer 3 to [SkateJS](http://skatejs.netlify.com/) and view renderer [lit-html](https://polymer.github.io/lit-html/).



## [0.0.4](https://github.com/rapid-build-ui/rb-button/compare/v0.0.3...v0.0.4) (2018-06-22)


### Features

* **bump:** dep [@rapid-build-ui](https://github.com/rapid-build-ui)/rb-icon to v0.0.3 ([bdaa9ab](https://github.com/rapid-build-ui/rb-button/commit/bdaa9ab))



## 0.0.3 (2018-06-22)


### Bug Fixes

* **icon:** fix alignment ([6c1b8f0](https://github.com/rapid-build-ui/rb-button/commit/6c1b8f0))
* **safari:** fix safari crashing when including and using rb-button ([9a47c1a](https://github.com/rapid-build-ui/rb-button/commit/9a47c1a))


