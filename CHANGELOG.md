# Nuxt/DatoCMS Demo Site Changelog
This project's changelog follows the guidelines set by [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) with version numbers adherent to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)


## 0.1.0 - 2018-06-19
### Fixed
- Some routes didn't exist (nor did I want them to, like /route2/child4), so they were removed in any references as well as `redirects.js` middleware
- Text for Event 1 wasn't centered
- Some track declarations in the CSS, as well as scrapped some refactoring
- The embed's positioning in /route3/child1
- The `openVex` method's logic due to some items not having sessions
- Vex cues for speakers of Event 3

### Added
- linear gradient fixed background

### Changed
- Presentation of Event 3's page to not look like the copy paste it was haha
- Logic of Keynote rendering for Event 3

### Removed
- Tracks for Event 3 (doesn't use them)

## 0.0.1 - 2018-06-18
### Added
- Initial commit of source
