# random-key-cz
#### A simple package to generate random keys/strings for generic purposes.

## Params
#### randomKeyCZ(`length`, `hyphen`, `hyphenPos`)
- `length` : number --> Length of the random key you want to generate (*required)
- `hyphen`: boolean --> Determines if you want to add hyphens in your random key (*required)
- `hyphenPos`: number --> Determines at which position, hyphens will repeat in your random string (optional) (default = 1)

## Examples
- `randomKeyCZ(10, true)` -  Output -> `J-9-R-0-3-F-i-q-Z-P` 
- `randomKeyCZ(10, false)` - Output -> `nkzCHHVlcC` 
- `randomKeyCZ(15, true, 3)` - Output -> `nN1-YXv-kwg-Zq3-YO7`
