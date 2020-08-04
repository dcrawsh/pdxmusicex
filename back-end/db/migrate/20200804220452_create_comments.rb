class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :post
      t.string :references

      t.timestamps
    end
  end
end
