<div align="center">

<p>
	<img width="128" src="./src/icons/web-scrobbler-circle.svg"/>
</p>
<h1>Web Scrobbler</h1>

[![Chrome Web Store][webstorebadge]][webstore]
[![Microsoft Edge Addons][edgebadge]][edge]

[![Discord][discordbadge]][discord]
[![Test status][githubactionsbadge]][githubactions]
[![Codacy Badge][codacybadge]][codacy]
[![Codacy Coverage Badge][codacycoveragebadge]][codacy]

</div>

Web Scrobbler helps online music listeners to scrobble their playback history.

## Supported Services

-   [Last.fm][lastfm]
-   [Libre.fm][librefm]
-   [ListenBrainz][listenbrainz]

## Installation

The extension can be either downloaded from stores, or installed as an [unpacked extension][docsunpacked].

### Chrome Web Store

It can be installed directly from the [Chrome Web Store][webstore] for Chrome users.

Opera users can install the extension from Chrome Web Store using the
[Download Chrome Extension][downloadchromeext] addon for Opera.

### Addons.mozilla.org

For those who prefer Firefox, the extension is available on [Addons.mozilla.org][amo].

Since v2.38.0 the extension uses a self-distribution model. You can download an XPI file from [GitHub Releases][github-releases] page.

### Microsoft Edge Add-ons

The extension is also avaiable on the [Microsoft Edge Add-ons][edge].

### Install from source code

To install the extension from sources or zip file, read
[this page][wikiunpacked] if you're on Chrome, or [this one][wikitempaddon]
if you use Firefox.

## Development

### Build the extension

```sh
# Install dependencies
> npm install

# Build the extension
> npx grunt build:chrome   # Chrome and Chrome-based browsers
> npx grunt build:firefox  # Firefox

# Start the dev server w/ rebuild on changes and hot code reload
> npm run dev:chrome       # Chrome
> npm run dev:firefox      # Firefox
```

The built extension is available in `build` directory. You can install it as an
unpacked extension from this directory.

The detailed build instruction is available [here][buildinstructions].

### Develop connectors

Check the [wiki page][wikidev] to understand development of connectors. Please
also read our [contribution guidelines][contributing].

### Translations

We use Transifex to maintain translations. If you want to translate
the extension, follow the [translations][translations] wiki page for details.

## Media

Follow [@web_scrobbler][twitter] on Twitter to receive the latest news and updates.

Join the [Discord channel][discord] to discuss the extension.

## Privacy Policy

See the [privacy policy][privacy].

## License

Licensed under the [MIT License][license].

<!-- Badges -->

[codacybadge]: https://img.shields.io/codacy/grade/32658c34c5c542d9a315ead8d5eadd0e?logo=codacy&logoColor=white
[codacycoveragebadge]: https://img.shields.io/codacy/coverage/32658c34c5c542d9a315ead8d5eadd0e?logo=codacy&logoColor=white
[discordbadge]: https://img.shields.io/discord/716363971070001202?logo=discord&logoColor=white&color=7289dA
[edgebadge]: https://img.shields.io/badge/dynamic/json?label=edge&logo=microsoft-edge&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fobiekdelmkmlgnhddmmnpnfhngejbnnc
[githubactionsbadge]: https://img.shields.io/github/workflow/status/web-scrobbler/web-scrobbler/Test?label=test&logo=github&logoColor=white
[webstorebadge]: https://img.shields.io/chrome-web-store/v/hhinaapppaileiechjoiifaancjggfjm.svg?label=chrome&logo=google-chrome&logoColor=white

<!-- Docs -->

[buildinstructions]: https://github.com/web-scrobbler/web-scrobbler/wiki/Setup-development-environment
[contributing]: https://github.com/web-scrobbler/web-scrobbler/blob/master/.github/CONTRIBUTING.md
[docsunpacked]: https://developer.chrome.com/extensions/getstarted#unpacked
[license]: https://github.com/web-scrobbler/web-scrobbler/blob/master/LICENSE.md
[privacy]: https://github.com/web-scrobbler/web-scrobbler/blob/master/src/_locales/en/privacy.md
[translations]: https://github.com/web-scrobbler/web-scrobbler/wiki/Translate-the-extension

<!-- Download -->

[amo]: https://addons.mozilla.org/en-US/firefox/addon/web-scrobbler/
[edge]: https://microsoftedge.microsoft.com/addons/detail/web-scrobbler/obiekdelmkmlgnhddmmnpnfhngejbnnc
[webstore]: https://chrome.google.com/webstore/detail/lastfm-scrobbler/hhinaapppaileiechjoiifaancjggfjm

<!-- Other -->

[downloadchromeext]: https://addons.opera.com/extensions/details/app_id/kipjbhgniklcnglfaldilecjomjaddfi

<!-- Related pages -->

[codacy]: https://app.codacy.com/gh/web-scrobbler/web-scrobbler/dashboard
[discord]: https://discord.com/invite/u99wNWw
[githubactions]: https://github.com/web-scrobbler/web-scrobbler/actions
[github-releases]: https://github.com/web-scrobbler/web-scrobbler/releases
[twitter]: https://twitter.com/web_scrobbler

<!-- Services -->

[lastfm]: http://www.last.fm/
[librefm]: https://libre.fm/
[listenbrainz]: https://listenbrainz.org/

<!-- Wiki pages -->

[wikidev]: https://github.com/web-scrobbler/web-scrobbler/wiki/Connectors-development
[wikitempaddon]: https://github.com/web-scrobbler/web-scrobbler/wiki/Install-a-temporary-add-on
[wikiunpacked]: https://github.com/web-scrobbler/web-scrobbler/wiki/Install-an-unpacked-extension
