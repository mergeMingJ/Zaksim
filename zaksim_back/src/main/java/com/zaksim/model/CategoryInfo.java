package com.zaksim.model;

public class CategoryInfo {

	private int category_id;
	private String category_name;
	private int count;
	
	public CategoryInfo() {}

	public CategoryInfo(int category_id, String category_name, int count) {
		super();
		this.category_id = category_id;
		this.category_name = category_name;
		this.count = count;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "CategoryInfo [category_id=" + category_id + ", category_name=" + category_name + ", count=" + count
				+ "]";
	}
	
}
