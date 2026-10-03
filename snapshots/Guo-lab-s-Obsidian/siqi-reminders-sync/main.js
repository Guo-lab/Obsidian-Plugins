const { Plugin, Notice } = require('obsidian');
const { execFile } = require('child_process');
const path = require('path');

module.exports = class SiqiRemindersSyncPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'sync-apple-reminders-to-calendar',
      name: 'Sync Apple Reminders to Calendar',
      callback: () => this.syncReminders(),
    });
  }

  async syncReminders() {
    const vaultBase = this.app.vault.adapter.basePath;
    const scriptPath = path.join(vaultBase, '00-System/Scripts/reminders/sync_apple_reminders_to_obsidian_tasks.py');
    const args = [scriptPath, '--lists', 'Life', 'Work', 'Urgent', 'Groceries', 'Research'];

    new Notice('Syncing Apple Reminders → Obsidian Calendar…', 2500);

    execFile('/usr/bin/python3', args, { cwd: vaultBase, timeout: 120000 }, async (error, stdout, stderr) => {
      if (error) {
        console.error('[SIQI Reminders Sync] failed', { error, stdout, stderr });
        new Notice(`Reminder sync failed: ${stderr || error.message}`, 8000);
        return;
      }

      console.log('[SIQI Reminders Sync] complete', stdout);
      new Notice('Reminder sync complete. Refreshing Full Calendar…', 3000);

      // Give Obsidian a moment to notice the changed/created markdown event files.
      setTimeout(() => {
        try {
          const commands = this.app.commands.listCommands();
          const reset = commands.find((cmd) => cmd.id === 'full-calendar-remastered:full-calendar-reset')
            || commands.find((cmd) => cmd.name === 'Reset Event Cache')
            || commands.find((cmd) => cmd.name === 'Full Calendar: Reset Event Cache')
            || commands.find((cmd) => cmd.name && cmd.name.includes('Reset Event Cache'));

          if (reset) {
            this.app.commands.executeCommandById(reset.id);
          } else {
            console.warn('[SIQI Reminders Sync] Full Calendar reset command not found. Available FCR commands:', commands.filter((c) => c.id.includes('full-calendar')).map((c) => ({ id: c.id, name: c.name })));
            new Notice('Reminder sync complete. If calendar looks stale, run Full Calendar: Reset Event Cache.', 6000);
          }
        } catch (e) {
          console.error('[SIQI Reminders Sync] calendar refresh failed', e);
          new Notice('Reminder sync complete, but calendar refresh failed. Reopen the calendar view.', 6000);
        }
      }, 1200);
    });
  }
};
