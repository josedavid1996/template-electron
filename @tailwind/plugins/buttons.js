const plugin = require('tailwindcss/plugin')

const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return alpha ? `rgba(${r}, ${g}, ${b},${alpha})` : `rgb(${r}, ${g}, ${b})`
}

module.exports = plugin(function ({ addComponents, theme }) {
  const colors = theme('colors')

  const exclude = new Set([
    'white',
    'black',
    'inherit',
    'current',
    'transparent'
  ])

  const colorsKeys = Object.keys(colors).filter((key) => !exclude.has(key))

  const buttons = {
    '.btn-solid-white': {
      color: colors.secondary.DEFAULT,
      borderColor: 'transparent',
      backgroundColor: '#fff',
      '&:hover': { backgroundColor: colors.gray['300'] },
      '&:disabled': {
        color: '#fff',
        pointerEvents: 'none',
        backgroundColor: colors.secondary.DEFAULT
      }
    },
    '.btn-ghost-white': {
      color: colors.secondary.DEFAULT,
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: hexToRGB('#ffffff', 0.2)
      },
      '&:disabled': {
        color: '#fff',
        pointerEvents: 'none',
        backgroundColor: colors.secondary.DEFAULT
      }
    },
    '.btn-outline-white': {
      color: '#fff',
      borderColor: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        color: colors.secondary.DEFAULT
      },
      '&:disabled': {
        color: '#fff',
        pointerEvents: 'none',
        borderColor: 'transparent',
        backgroundColor: colors.secondary.DEFAULT
      }
    }
  }

  for (const key of colorsKeys) {
    buttons[`.btn-solid-${key}`] = {
      color: '#fff',
      borderColor: 'transparent',
      backgroundColor: colors[key]['600'],
      '&:hover': { backgroundColor: colors[key]['700'] },
      '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: colors.slate['300']
      }
    }

    buttons[`.dark .btn-solid-${key}`] = {
      color: '#fff',
      borderColor: 'transparent',
      backgroundColor: colors[key]['600'],
      '&:hover': { backgroundColor: colors[key]['500'] },
      '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: colors.slate['700']
      }
    }

    buttons[`.btn-outline-${key}`] = {
      color: colors[key]['600'],
      borderColor: colors[key]['600'],
      '&:hover': {
        color: colors[key]['700'],
        borderColor: colors[key]['700'],
        backgroundColor: hexToRGB(colors[key]['400'], 0.2)
      },
      '&:disabled': {
        pointerEvents: 'none',
        opacity: '0.5'
      }
    }

    buttons[`.dark .btn-outline-${key}`] = {
      color: colors[key]['400'],
      borderColor: colors[key]['400'],
      '&:hover': {
        backgroundColor: hexToRGB(colors[key]['400'], 0.2)
      }
    }

    buttons[`.btn-ghost-${key}`] = {
      color: colors[key]['600'],
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: hexToRGB(colors[key]['400'], 0.2)
      }
    }

    buttons[`.dark .btn-ghost-${key}`] = {
      color: colors[key]['400'],
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: hexToRGB(colors[key]['400'], 0.2)
      }
    }
  }

  addComponents({
    '.btn': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing')['3'],
      borderWidth: 1.5,
      padding: '0.5em 2.5em',
      fontWeight: '500',
      outline: 'none',
      // fontSize: '1rem',
      lineHeight: theme('spacing')['7'],
      borderRadius: theme('spacing')['2'],
      transitionDuration: '250ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionProperty: 'color, background-color, border-color, fill',
      '& svg': {
        width: '1em',
        height: '1em'
      }
    },
    '.btn-icon': {
      borderWidth: 1.5,
      outline: 'none',
      padding: '0.5em',
      lineHeight: theme('spacing')['7'],
      borderRadius: theme('spacing')['2'],
      transitionDuration: '250ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionProperty: 'color, background-color, border-color, fill',
      '& svg': {
        width: '1em',
        height: '1em'
      }
    },
    ...buttons
  })
})
