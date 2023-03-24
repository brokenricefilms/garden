# obsidian plugin copy link share note on publish github repo


[script copy link share](./custom_javascript/copy_share_link.js)

```js
!function() {
	function copyURL() {
		const vaultName = app.vault.getName().replace(/\s/gi, '%20')
		const noteName = app.workspace.activeLeaf.view.file.name.replace(/\s/gi, '%20')
		const path = `obsidian://open/?vault=${vaultName}&file=${noteName}`

        navigator.clipboard.writeText(path)
	}

	app.commands.addCommand({
	    id: 'app:copyURL',
	    name: 'Copy note URL',
	    callback: copyURL,
	    hotkeys: []
	})
}()
// pasted it to dev tool
// obsidian://open/?vault=garden&file=obsidian%20plugin%20copy%20link%20share%20note%20on%20publish.md
//command in obsidian: `Copy note URL`

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

async pushOnClose() {
	const { exec } = require("child_process");
	exec("git add .; git commit -m \"Test closing commit\"; git pull --rebase; git push;", (error, stdout, stderr) => {
		if (error) {
			console.log("Error while closing on exit: ${error.message}");
		}
	}
}
			 
!function() {
	function copy_share_link_and_push() {
		const github_repo_url = 'https://github.com/thuanowa/garden/blob/main/'
		const noteName = app.workspace.activeLeaf.view.file.name.replace(/\s/gi, '%20')
		const path = `${github_repo_url}${noteName}`

        navigator.clipboard.writeText(path)
	}

	app.commands.addCommand({
	    id: 'app:copy_share_link_and_push',
	    name: 'Copy share link and push',
	    callback: copy_share_link_and_push,
	    hotkeys: []
	})
}()
```

- [-] make a obsidian plugin for easy to use #ideas/programming 

- using [GitHub - saml-dev/obsidian-custom-js: An Obsidian plugin to allow users to reuse code blocks across all devices and OSes](https://github.com/saml-dev/obsidian-custom-js)

---
[Copy note URL command - Share & showcase - Obsidian Forum](https://forum.obsidian.md/t/copy-note-url-command/6696)

#tool/obsidian 