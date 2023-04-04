# obsidian copy note linking in markdown

```javascript
!function() {
	function copy_note_link() {
		const note_file_name = app.workspace.activeLeaf.view.file.name.replace(/\s/gi, '%20')
		const note_name = app.workspace.activeLeaf.view.file.basename
		const markdown_link = `[${note_name}](${note_file_name})`

        navigator.clipboard.writeText(markdown_link)
	}

	app.commands.addCommand({
	    id: 'app:copy_note_link',
	    name: 'Copy note link',
	    callback: copy_note_link,
	    hotkeys: []
	})
}()
```