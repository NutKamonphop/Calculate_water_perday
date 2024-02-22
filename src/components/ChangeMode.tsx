import React from 'react'

type ThemeType = {
	current: string
	btnText: string
}

export const ChangeMode = (): React.ReactElement => {
	const [theme, setTheme] = React.useState<ThemeType>({ current: 'Light', btnText: '🌙' })

	const onChangeTheme = () => {
		setTheme(theme.current === 'Light' ? { current: 'Dark', btnText: '☀️' } : { current: 'Light', btnText: '🌙' })
		if (theme.current === 'Light') {
			document.body.classList.remove('light-mode')
			document.body.classList.add('dark-mode')
		} else {
			document.body.classList.remove('dark-mode')
			document.body.classList.add('light-mode')
		}
	}

	return (
		<div className='theme-toggler-div'>
			<button onClick={onChangeTheme} className='btn-theme'>{theme.btnText}</button>
		</div>
	)
}