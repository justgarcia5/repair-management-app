class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :client_name
      t.integer :client_phone
      t.integer :client_phone_2
      t.text :job_description
      t.string :make
      t.string :model
      t.integer :model_year
      t.text :parts_list
      t.boolean :parts_ordered
      t.string :start_date
      t.boolean :repair_started
      t.text :mechanics
      t.boolean :completed
      t.string :date_arrived
      t.boolean :paid
      t.boolean :approval

      t.timestamps
    end
  end
end
