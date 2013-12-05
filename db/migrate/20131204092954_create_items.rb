class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.text :question_title
      t.text :help_text
      t.text :question_type

      t.timestamps
    end
  end
end
