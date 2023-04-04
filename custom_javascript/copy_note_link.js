!function() {
	function copy_note_link() {
		const note_file_name = app.workspace.activeLeaf.view.file.name.replace(/\s/gi, '%20')
		const note_name = app.workspace.activeLeaf.view.file.basename
		const markdown_link = `[${note_name}](${note_file_name})`
		console.log(markdown_link)

        navigator.clipboard.writeText(path)
	}

	app.commands.addCommand({
	    id: 'app:copy_note_link',
	    name: 'Copy note link',
	    callback: copy_note_link,
	    hotkeys: []
	})
}()
