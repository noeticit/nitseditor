<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNitsPluginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nits_plugins', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string('plugin_id');
            $table->enum('subscription_category', ['free', 'premium']);
            $table->enum('subscription_type', ['weekly', 'monthly', 'yearly']);
            $table->string('subscription_start_date');
            $table->string('next_subscription_date');
            $table->boolean('active_status');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nits_plugins');
    }
}
