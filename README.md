# Interledger.org Website

This repository holds the code behind the website at [interledger.org](https://interledger.org).

## Get Involved

If you are keen to contribute, [join the community](https://interledger.org/community.html).

## Editing

***Do not edit the `.html` files at the root of the project. Your changes will be overwritten.***

The [`_dactyl/dactyl-config.yml` file](_dactyl/dactyl-config.yml) lists the main contents of the website, which are Markdown files from two sources:

- Interledger RFCs are managed upstream in the [**RFCs repo**](https://github.com/interledger/rfcs/). When you build the website it downloads the latest version of each from the master branch (as specified by the URLs in the `dactyl-config.yml`).
- Other documents are mostly managed here in this repository under [**`_content/`**](_content/).

To build the site you first need to install [Dactyl](https://github.com/ripple/dactyl). For example:

```sh
$ sudo pip3 install dactyl
```

Then you can build a local copy by running the following command from the `_dactyl/` folder:

```sh
$ dactyl_build -S
```

To add new pages you must edit the [`_dactyl/dactyl-config.yml` file](_dactyl/dactyl-config.yml) and provide the necessary metadata about the pages, then run `dactyl_build -S` to generate the new contents. (The `-S` just tells it to skip the step of copying the assets folder over, since it's already in the right place.)

To modify the page layout, edit the [`_dactyl/templates/` contents](_dactyl/templates/) files. These files use [Jinja](https://palletsprojects.com/p/jinja/) syntax.

To contribute your changes back, commit the changes to a feature branch and open a [pull request](https://help.github.com/en/articles/about-pull-requests).

<!-- EVENTUALLY:

Humans should make changes by opening PRs against the `develop` branch, never modifying the `master` branch directly nor opening PRs to `master`. CI should automatically merge any changes from the `develop` branch to the `master` branch, then build and commit the HTML changes to the master branch so that the website updates automatically.

CI should also build and run the link checker on PRs to the develop branch to make sure all is good before anything gets merged.

-->
