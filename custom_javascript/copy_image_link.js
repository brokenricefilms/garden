!function() {
	function copy_image_link() {
		const image_file_name = app.workspace.activeLeaf.view.file.name.replace(/\s/gi, '%20')
		const image_name = app.workspace.activeLeaf.view.file.basename
		const markdown_image_link = `[${image_name}](${note_file_name})`

		navigator.clipboard.writeText(markdown_image_link)
	}

	app.commands.addCommand({
		id: 'app:copy_image_link',
		name: 'Copy image link',
		callback: copy_image_link,
		hotkeys: []
	})
}()
