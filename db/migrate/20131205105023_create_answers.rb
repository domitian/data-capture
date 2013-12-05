class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :option
      t.integer :item_id

      t.timestamps
    end
  end
end
