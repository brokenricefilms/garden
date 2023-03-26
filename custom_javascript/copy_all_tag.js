!function() {
	function copy_all_tag() {
		const path = Object.keys(app.metadataCache.getTags()).join(', ');
		navigator.clipboard.writeText(path)
	}

	app.commands.addCommand({
		id: 'app:copy_all_tag',
		name: 'Copy all tag',
		callback: copy_all_tag,
		hotkeys: []
	})
}()
