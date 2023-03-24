!function() {
	function copy_share_link() {
		const github_repo_url = 'https://github.com/thuanowa/garden/blob/main/'
		const noteName = app.workspace.activeLeaf.view.file.name.replace(/\s/gi, '%20')
		const path = `${github_repo_url}${noteName}`

        navigator.clipboard.writeText(path)
	}

	app.commands.addCommand({
	    id: 'app:copy_share_link',
	    name: 'Copy share link',
	    callback: copy_share_link,
	    hotkeys: []
	})
}()
